/**
File Name : rel_fairytale_users.entity
Description : 중간 테이블 Entity - 동화 스토리, 회원
Author : 박수정

History
Date        Author      Status      Description
2024.08.01  박수정      Created     
2024.08.01  박수정      Modified    중간 테이블 생성
2024.08.02  박수정      Modified    DB 컬럼명 수정
*/

import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity('rel_fairytale_users')
export class RelFairytaleUsers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'fairytale_id' })
    fairytaleId: number;

    @Column({ name: 'user_id' })
    userId: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Column({ name: 'updated_at', type: 'timestamp', nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}