import { Hono } from "hono";
import { graphqlServer } from "hono/graphql-server";
import { buildSchema } from "graphql";

const app = new Hono();

// Define your GraphQL schema using buildSchema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define the rootResolver as specified in the demo
const rootResolver = {
  hello: () => "Hello, Hono!",
};

// Use the GraphQL Server Middleware, now passing schema and rootResolver directly
app.use(
  "/graphql", 
  graphqlServer({
    schema,
    rootValue: rootResolver, // Ensure rootValue matches your resolver structure
  })
);

// Define other routes or middleware as needed
app.get("/", (c) => c.text("Welcome to Hono!"));

// Adjust the server startup to use Deno.serve if necessary
// This ensures compatibility with how you're running your Hono app
Deno.serve({ handler: app.fetch, port: 3000 });
