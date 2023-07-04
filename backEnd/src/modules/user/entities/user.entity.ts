import { Column, PrimaryGeneratedColumn } from "typeorm"
import { isNumber } from 'class-validator'

export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    username: string

    @Column()
    password: string
}
