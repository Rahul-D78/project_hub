import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "./Users";

@Entity('projects')
export class Project {
    @PrimaryColumn()
    slug: string

    @Column({type:'text'})
    body: string

    @Column({type: 'text', nullable: false})
    title: string

    @Column({type: 'text', nullable: true})
    tags?: string[]

    @ManyToOne(() => User)
    author: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    constructor(slug: string, body: string, title: string, tags: string[], author: User) {
        this.slug = slug
        this.body = body
        this.title = title
        this.tags = tags
        this.author = author
    }
}