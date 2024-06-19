import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.entity";

@Entity('class')
export class Classes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 50,
        comment: '课程名称'
    })
    name: string;

    @Column({
        type: 'varchar',
        comment: '课程描述',
        nullable: true
    })
    description: string;

    @Column({
        type: 'varchar',
        comment: '封面图',
        nullable: true
    })
    cover_image: string;

    @Column({
        type: 'varchar',
        comment: '课程图片',
        nullable: true
    })
    file_image: string;

    @Column({
        type: 'int',
        comment: '是否为vip课程 0否 1是',
        default: 0
    })
    is_vip: number;

    @Column({
        type: 'int',
        comment: '购买数量',
        default: 0
    })
    buy_qty: number;

    @Column({
        type: 'decimal',
        comment: '课程价格',
        nullable: true
    })
    price: number;

    @Column({
        type: 'decimal',
        comment: '折扣价格',
        nullable: true
    })
    discout_price: number;

    // 关联分类
    @ManyToOne(type => Category, category => category.id)
    category: Category;

    @Column({
        type: 'int',
        comment: '分类ID',
        nullable: true
    })
    categoryId: number;

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
