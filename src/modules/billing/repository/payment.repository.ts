/**
File Name : payment.repository
Description : 결제 Repository
Author : 이유민

History
Date        Author      Status      Description
2024.08.01  이유민      Created     
2024.08.01  이유민      Modified    결제 관련 기능 추가
2024.08.05  이유민      Modified    결제 전체 수정
*/

import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Payment } from 'src/modules/billing/entity/payment.entity';

@Injectable()
export class PaymentRepository extends Repository<Payment> {
    constructor(private dataSource: DataSource) {
        super(Payment, dataSource.createEntityManager());
    }

    async createPayment(PaymentData: Partial<Payment>): Promise<Payment> {
        const payment = this.create(PaymentData);
        return this.save(payment);
    }

    async cancelPayment(id: string): Promise<object> {
        const payment = await this.findOne({ where: { id } });
        payment.status = 'CANCELED';
        this.save(payment);

        return { message: '결제가 취소되었습니다.' };
    }

    async findPaymentByUserId(user_id: number): Promise<Payment[]> {
        const res = await this.dataSource
            .getRepository(Payment)
            .createQueryBuilder('payment')
            .select(['payment.id', 'payment.amount', 'payment.method', 'payment.status', 'payment.createdAt'])
            .where('payment.user_id = :user_id', { user_id })
            .orderBy('payment.createdAt', 'ASC')
            .getMany();

        return res;
    }

    async findPaymentById(id: string): Promise<Payment> {
        const res = await this.dataSource
            .getRepository(Payment)
            .createQueryBuilder('payment')
            .select(['payment.id', 'payment.status', 'payment.user_id'])
            .where('payment.id = :id', { id })
            .getOne();

        return res;
    }
}
