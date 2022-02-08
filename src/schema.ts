import { buildSchema } from "type-graphql";
import { CreateCategory } from "./modules/category/CreateCategory";
import { GetCategories } from "./modules/category/GetCategories";
import { CreateProduct } from "./modules/product/CreateProduct";
import { GetProducts } from "./modules/product/GetProducts";

export default (Container: any) => {
  return buildSchema({
    container: Container,
    resolvers: [CreateCategory, GetCategories, CreateProduct, GetProducts],
  });
};
