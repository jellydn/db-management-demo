import { faker } from "@faker-js/faker";

import { AppDataSource } from "./data-source";
import { User } from "./entities/User";
import { Post } from "./entities/Post";

// Example output: https://app.warp.dev/block/TI4ScGg95v6IpKxtAfszHL
AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.name = faker.person.fullName();
    user.email = faker.internet.email();
    await AppDataSource.manager.save(user);
    console.log(`Saved a new user with id: ${user.id}`);

    const post = new Post();
    post.author = user;
    post.title = faker.lorem.sentence();
    post.content = faker.lorem.paragraph();

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User, {
      relations: ["posts"],
    });

    users.forEach((user) => {
      console.log("Loaded user: ", JSON.stringify(user, null, 2));
    });

    console.log(
      "Here you can setup and run express / fastify / any other framework.",
    );
    process.exit();
  })
  .catch((error) => console.log(error));
