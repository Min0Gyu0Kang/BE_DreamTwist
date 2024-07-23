/**
File Name : fairytale-board.repository
Description : 동화 스토리 생성 Repository
Author : 강민규

History
Date        Author      Status      Description
2024.07.22  강민규      Created
2024.07.22  강민규      Modified    based on create repository
*/

import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Fairytale } from '../entity/fairytale.entity';

@Injectable()
export class BoardFairytaleRepository extends Repository<Fairytale> {
    constructor(private dataSource: DataSource) {
        super(Fairytale, dataSource.createEntityManager());
    }

    async createFairytale(fairytaleData: Partial<Fairytale>): Promise<Fairytale> {
        const fairytale = this.create(fairytaleData);
        return this.save(fairytale);
    }

    async findFairytale(id: number): Promise<Fairytale> {
        return this.findOne({
            where: { id },
            relations: ['user', 'content'],
        });
    }
}