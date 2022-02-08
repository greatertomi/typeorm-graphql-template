import { Query, Resolver } from "type-graphql";
import { Category } from "../../models/Category";
import { InjectRepository } from "typeorm-typedi-extensions";
import { CategoryRepository } from "../../repositories/CategoryRepository";

// Creating a resolver: method 2.
@Resolver((_type) => Category)
export class GetCategories {
  constructor(
    @InjectRepository()
    private readonly categoryRepository: CategoryRepository
  ) {}

  @Query((_type) => [Category])
  public async getCategories(): Promise<Category[]> {
    const categories = await this.categoryRepository.find({
      relations: ["products"],
    });
    return categories;
  }
}
