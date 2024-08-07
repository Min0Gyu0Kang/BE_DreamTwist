/**
File Name : user.repository
Description : User Repository
Author : 박수정

History
Date        Author      Status      Description
2024.07.30  박수정      Created     
2024.07.30  박수정      Modified    회원정보 수정, 회원탈퇴, 로그아웃 기능 추가
2024.08.01  박수정      Modified    프로필 이미지 업로드 기능 추가
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from 'src/modules/user/entity/user.entity';
import { CreateUserDTO } from 'src/modules/user/dto/create-user.dto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    // Google Id로 회원 조회
    async findUserByGoogleId(googleId: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { googleId } });
    }

    // UserId로 회원 조회
    async findUserById(id: number): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { id } });
    }

    // 닉네임으로 회원 조회
    async findUserByNickname(nickname: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { nickname } });
    }

    // 회원가입
    async createUser(userData: CreateUserDTO): Promise<User> {
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
    }

    // 유저 프로필 이미지 업데이트
    async updateUserProfileImage(userId: number, profileImageId: number): Promise<void> {
        await this.userRepository.update(userId, { profileImageId });
    }

    // 로그인 시, online으로 변경
    async updateUserOnline(userId: number, isOnline: boolean): Promise<void> {
        await this.userRepository.update(userId, { isOnline });
    }

    // RefreshToken 발급
    async updateRefreshToken(userId: number, refreshToken: string): Promise<void> {
        await this.userRepository.update(userId, { refreshToken });
    }

    // 회원정보 수정
    async updateUser(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    // 회원 탈퇴
    async deleteUser(id: number): Promise<void> {
        await this.userRepository.softDelete(id);
    }

    // 로그아웃
    async logout(userId: number, updateData: Partial<User>): Promise<UpdateResult> {
        return this.userRepository
            .createQueryBuilder()
            .update(User)
            .set(updateData)
            .where('id = :id', { id: userId })
            .andWhere('refreshToken IS NOT NULL')
            .execute();
    }
}