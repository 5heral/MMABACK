import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { DataSource } from "typeorm";
import { FighterResolver } from "./resolvers/FighterResolver";
import { EventResolver } from "./resolvers/EventResolver";
import { FightResolver } from "./resolvers/FightResolver";
import { Fighter } from "./entities/Fighter";
import { Event } from "./entities/Event";
import { Fight } from "./entities/Fight";
import { Ranking } from "./entities/Ranking";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "mma_db",
  synchronize: true,
  logging: false,
  entities: [Fighter, Event, Fight, Ranking],
});

async function main() {
  await AppDataSource.initialize();

  const schema = await buildSchema({
    resolvers: [FighterResolver, EventResolver, FightResolver],
  });

  const server = new ApolloServer({ schema });
  const { url } = await server.listen(4000);
  console.log("Server running at", url);
}

main();
