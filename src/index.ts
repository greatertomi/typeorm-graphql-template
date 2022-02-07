import "reflect-metadata";
import * as TypeORM from "typeorm";
import { Container } from "typedi";
import createSchema from "./schema";
import { ApolloServer } from "apollo-server-express";
import express from "express";

TypeORM.useContainer(Container);

const bootstrap = async () => {
  try {
    // create TypeORM connection
    await TypeORM.createConnection();

    // build TypeGraphQL executable schema
    const schema = await createSchema(Container);

    // Create GraphQL server
    const server = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      debug: true,
      playground: true,
    });
    const app = express();
    const port = 5500;

    server.applyMiddleware({ app });
    app.listen({ port }, () => {
      console.log(
        `Server ready at http://localhost:${port}${server.graphqlPath}`
      );
    });
  } catch (err) {
    console.error(err);
  }
};

bootstrap();
