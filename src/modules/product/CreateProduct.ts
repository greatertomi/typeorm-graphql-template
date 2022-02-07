import { Arg, Mutation, Resolver } from "type-graphql";
import { Product } from "../../models/Product";
import { CreateProductInput } from "./CreateProductInput";
import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../../repositories/ProductRepository";

@Resolver((_type) => Product)
export class CreateProduct {
  @Mutation((_type) => Product)
  public async createProduct(
    @Arg("data") inputData: CreateProductInput
  ): Promise<Product> {
    const productRepository = getCustomRepository(ProductRepository);
    const product = productRepository.create({
      name: inputData.name,
      code: inputData.code,
    });

    await productRepository.save(product);
    return product;
  }
}
