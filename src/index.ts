import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { buildSubgraphSchema } from "@apollo/subgraph";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { readFileSync } from "fs";
import gql from "graphql-tag";
import { resolve } from "path";
import app from "./app";
import resolvers from "./graphql/resolvers";
import { connectToDatabase } from "./utils/common/database";

dotenv.config();

const PORT = process.env.PORT || 5000;

const typeDefsPath = resolve(__dirname, "graphql/schema.graphql");
const typeDefs = gql(
  readFileSync(typeDefsPath, {
    encoding: "utf-8",
  }),
);

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

async function startServer() {
  await connectToDatabase();
  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}

startServer().catch(error => {
  console.error("Not able to run server --->", error.message);
});
