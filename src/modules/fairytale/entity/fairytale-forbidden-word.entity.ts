/**
File Name : fairytale-forbidden.entity
Description : 금지어 설정 Entity
Author : 박수정

History
Date        Author      Status      Description
2024.07.24  박수정      Created
2024.07.24  박수정      Modified    금지어 설정 기능 추가
2024.08.02  박수정      Modified    DB 컬럼명 수정
*/

import { Entity, Column, BaseEntity } from 'typeorm';

@Entity('fairytale_forbidden_word')
export class ForbiddenWord extends BaseEntity {
    @Column({ name: 'forbidden_word' })
    forbiddenWord: string;
}
