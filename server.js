import { ApolloServer, gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import {quotes, users} from './fakedb.js';

const typeDefs = gql`
  type Query {
    greet: String
    users : [User]
    quotes: [Quote]
    user(id: ID!): User
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }

  type Quote {
    name: String
    by: String
  }

  type Mutation {
    createUser(
    firstName: String!,
    lastName: String!,
    email: String!,
    password: String!,
    ): User 
  }
`;

const resolvers = {
  Query: {
    greet: () => "Hello World",
    users: () => users,
    quotes: () => quotes,
    user: (_, req) => users.find(({id})=> id === req.id),
  },
  User: {
    quotes: ({id}) => quotes.filter(({by})=> by === id) 
  },
  Mutation: {
    createUser: async(_, {firstName, lastName, email, password}) => {
      console.log("User Created");
      users.push({
        id: Math.random().toString(),
        firstName,
        lastName,
        email,
        password,
      });

      return users[users.length - 1];
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
