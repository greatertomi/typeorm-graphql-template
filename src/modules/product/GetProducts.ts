import { Query, Resolver } from "type-graphql";
import { Product } from "../../models/Product";
import { InjectRepository } from "typeorm-typedi-extensions";
import { ProductRepository } from "../../repositories/ProductRepository";

@Resolver((_type) => Product)
export class GetProducts {
  constructor(
    @InjectRepository()
    private readonly productRepository: ProductRepository
  ) {}

  @Query((_type) => [Product])
  public async getProducts(): Promise<Product[]> {
    const products = await this.productRepository.find();
    return products;
  }
}
