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

@Entity()
@Unique(["code"])
export class Category {
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Column()
  public code!: string;

  @Column()
  public name!: string;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updateAt!: Date;

  @OneToMany((_type) => Product, (product: Product) => product.category)
  public products?: Product[];
}
