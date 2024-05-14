import "reflect-metadata";
import { DataSource } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME ?? "postgres",
  password: process.env.DB_PASSWORD ?? "mysecretpassword",
  database: process.env.DB_NAME ?? "mydb",
  synchronize: false,
  logging: false,
  entities: [User, Post],
  migrations: [],
  subscribers: [],
});
