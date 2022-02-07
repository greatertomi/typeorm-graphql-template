import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
@Unique(["code"])
export class Product {
  @Field((_type) => Number)
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Field()
  @Column({ type: "varchar" })
  public code!: string;

  @Field()
  @Column({ type: "varchar" })
  public name!: string;

  @Field()
  @CreateDateColumn()
  public createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  public updatedAt!: Date;

  @Field((_type) => Category)
  @ManyToOne((_type) => Category, (category: Category) => category.id)
  @JoinColumn({ name: "categoryId" })
  public category!: Category;
}
