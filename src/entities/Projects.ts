import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Projects')
export class Project {
    @PrimaryColumn()
    slug: string

    @Column({type:'text'})
    body: string

    @Column({type: 'text', nullable: false})
    title: string

    @Column({type: 'text', nullable: true})
    tags?: string[]

    constructor(slug: string, body: string, title: string, tags: string[]) {
        this.slug = slug
        this.body = body
        this.title = title
        this.tags = tags
    }
}