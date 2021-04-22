import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Users')
export class User {
    @PrimaryColumn()
    email: string

    @Column({unique: true, nullable: false})
    username: string

    @Column({nullable: true})
    password?: string

    @Column({nullable: true})
    image?: string

    @Column({type: 'text', nullable: true})
    bio: string

    token: string

    constructor(email: string, username: string, password: string) {
        this.email = email
        this.username = username
        this.password = password
    }
}