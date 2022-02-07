import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
@Unique(["code"])
export class Category {
  @Field((_type) => Number)
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Field()
  @Column()
  public code!: string;

  @Field()
  @Column()
  public name!: string;

  @Field()
  @CreateDateColumn()
  public createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  public updateAt!: Date;

  @Field((_type) => [Product])
  @OneToMany((_type) => Product, (product: Product) => product.category)
  public products?: Product[];
}
