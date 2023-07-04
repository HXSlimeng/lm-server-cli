import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    id: number

    username: string
    password: string
}