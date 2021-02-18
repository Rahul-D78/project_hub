import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
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
}