/// <reference types="./index.d.ts" />

import { Hono } from "hono";
import { graphqlServer } from "hono/graphql-server";
import { buildSchema } from "graphql";
import * as git from "isomorphic-git";
import http from "http"; 
import fs from "fs";


// Define your GraphQL schema and resolver as previously outlined
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootResolver = {
  hello: () => "Hello, Hono!",
};

// Initialize Hono app and use the GraphQL middleware
const app = new Hono();

app.use("/graphql", graphqlServer({ schema, rootValue: rootResolver }));
app.get("/", (c) => c.text("Welcome to Hono!"));

// Implement the git clone operation as an example of using isomorphic-git with the adapted fs and HTTP client
app.get('/clone-repo', async (c) => {
  const dir = './git';
  const url = 'https://github.com/isomorphic-git/isomorphic-git'; // Example repository URL

  try {
  
   await git.clone({
      fs,
      http,
      dir,
      url,
      ref: 'main',
      singleBranch: true,
      depth: 1,
    });
    return c.json({ message: 'Repository successfully cloned.' });
  } catch (error) {
    console.error('Clone operation failed:', error);
    return c.json({ message: 'Failed to clone repository.', error: error.message }, 500);
  }
});

// Serve the application
await Deno.serve({ handler: app.fetch, hostname: "0.0.0.0", port: 3000 });

