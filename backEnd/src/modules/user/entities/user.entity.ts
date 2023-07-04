import { Column, PrimaryGeneratedColumn } from "typeorm"

export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    username: string

    @Column()
    password: string
}
