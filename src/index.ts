import "reflect-metadata";
import * as TypeORM from "typeorm";
import { Container } from "typedi";

TypeORM.useContainer(Container);

const bootstrap = async () => {
  try {
    await TypeORM.createConnection();
  } catch (err) {
    console.error(err);
  }
};

bootstrap();
