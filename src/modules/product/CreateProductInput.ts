import { Field, InputType } from "type-graphql";

@InputType()
export class CreateProductInput {
  @Field()
  public name!: string;

  @Field()
  public code!: string;
}
