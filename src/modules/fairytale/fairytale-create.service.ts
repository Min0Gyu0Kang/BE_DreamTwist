/**
File Name : fairytale-create.service
Description : 동화 스토리 생성 Service
Author : 박수정

History
Date        Author      Status      Description
2024.07.19  박수정      Created
2024.07.20  박수정      Modified    동화 스토리 생성 기능 추가
2024.07.22  박수정      Modified    금지어 설정 기능 추가
2024.07.26  박수정      Modified    동화 이미지 업로드 기능 추가
2024.08.01  박수정      Modified    Entity 변경에 대한 Service 변경
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFairytaleDto } from './dto/fairytale-create.dto';
import { FairytaleRepository } from './repository/fairytale-create.repository';
import { UserRepository } from '../user/user.repository';
import { Fairytale } from './entity/fairytale.entity';
import { ForbiddenWordRepository } from './repository/fairytale-forbidden-word.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { FairytaleImgRepository } from './repository/fairytale-img.repository';
import { S3Service } from '../s3.service';
import { FairytaleImg } from './entity/fairytale-img.entity';
import { CreateFairytaleImgDto } from './dto/fairytale-img.dto';

@Injectable()
export class FairytaleService {
    constructor(
        @InjectRepository(FairytaleRepository)
        private readonly fairytaleRepository: FairytaleRepository,
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly forbiddenWordRepository: ForbiddenWordRepository,
        @InjectRepository(FairytaleImgRepository)
        private readonly fairytaleImgRepository: FairytaleImgRepository,
        private readonly s3Service: S3Service,
    ) {}

    // 동화 스토리 생성
    // async createFairytale(createFairytaleDto: CreateFairytaleDto, user: User) {
    async createFairytale(
        createFairytaleDto: CreateFairytaleDto,
        createFairytaleImgDto: CreateFairytaleImgDto,
        file: Express.Multer.File,
    ): Promise<{ savedFairytale: Fairytale; savedFairytaleImg: FairytaleImg }> {
        // 임시 사용자
        const userId = 1;
        const user = await this.userRepository.findOne({ where: { id: userId } });

        if (!user) {
            throw new Error('회원을 찾을 수 없습니다.');
        }

        // 금지어 확인
        await this.checkForbiddenWodrds([createFairytaleDto.title, createFairytaleDto.content]);

        // 동화 스토리 공개 여부 확인
        let privatedAt: Date | null = null;
        if (createFairytaleDto.privatedAt === true) {
            privatedAt = new Date();
        }

        // 동화 스토리
        const fairytale = await this.fairytaleRepository.createFairytale({
            title: createFairytaleDto.title,
            theme: createFairytaleDto.theme,
            content: JSON.parse(createFairytaleDto.content),
            privatedAt: privatedAt,
        });
        const savedFairytale = await this.fairytaleRepository.save(fairytale);

        // 동화 이미지 업로드
        let imgUrl: string;

        if (file) {
            const key = `img/${fairytale.id}/${Date.now()}-${file.originalname}`;
            imgUrl = await this.s3Service.uploadFile(file, key);
        } else {
            imgUrl = this.s3Service.getDefaultImgUrl();
        }

        const images = JSON.parse(createFairytaleImgDto.images);
        const combinedImages = { '0': createFairytaleImgDto.coverImage, ...images };

        const fairytaleImg = await this.fairytaleImgRepository.createFairytaleImg({
            fairytaleId: fairytale.id,
            creationWay: createFairytaleImgDto.creationWay,
            path: combinedImages,
        });
        const savedFairytaleImg = await this.fairytaleImgRepository.save(fairytaleImg);

        return { savedFairytale, savedFairytaleImg };
    }

    // 금지어 설정
    private async checkForbiddenWodrds(texts: string[]): Promise<void> {
        const forbiddenWords = await this.forbiddenWordRepository.getAllForbiddenWords();
        const foundForbiddenWords: string[] = [];

        for (const text of texts) {
            for (const word of forbiddenWords) {
                if (text.includes(word.forbidden_word)) {
                    foundForbiddenWords.push(word.forbidden_word);
                }
            }
        }

        if (foundForbiddenWords.length > 0) {
            throw new BadRequestException(`입력 불가한 금지어가 포함되어 있습니다: ${foundForbiddenWords.join(', ')}`);
        }
    }
}
