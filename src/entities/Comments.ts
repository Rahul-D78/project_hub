import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./Users";

@Entity('comments')
export class Comments {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text', nullable: false})
    body: string

    @ManyToOne(() => User)
    author: User

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}