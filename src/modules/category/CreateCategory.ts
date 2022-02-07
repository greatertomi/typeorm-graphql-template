import { Arg, Mutation, Resolver } from "type-graphql";
import { Category } from "../../models/Category";
import { CreateCategoryInput } from "./CreateCategoryInput";
import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";

// Creating resolver method 1.
@Resolver((_type) => Category)
export class CreateCategory {
  @Mutation((_type) => Category)
  public async createCategory(
    @Arg("data") inputData: CreateCategoryInput
  ): Promise<Category> {
    const categoryRepository = getCustomRepository(CategoryRepository);
    const category = categoryRepository.create({
      name: inputData.name,
      code: inputData.code,
    });

    await categoryRepository.save(category);
    return category;
  }
}
