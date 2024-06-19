import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Classes } from "./class.entity";

@Entity('category')
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '分类名称'
    })
    name: string;

    @Column({
        type: 'varchar',
        comment: '分类描述',
        nullable: true
    })
    description: string;

    @Column({
        type: 'int',
        comment: '父级ID',
        default: 0
    })
    pid: number;

    @OneToOne(type => Classes, classes => classes.category)
    classes: Classes;

    @Column({
        type: 'int',
        comment: '排序',
        default: 0
    })
    sort: number;

    @Column({
        type: 'int',
        comment: '是否删除 0未删除 1已删除',
        default: 0
    })
    delete: number;

    @CreateDateColumn({
        type: 'datetime',
        comment: '创建时间'
    })
    created_at: Date;

    @UpdateDateColumn({
        type: 'datetime',
        comment: '更新时间'
    })
    updated_at: Date;
}
