const { ApolloServer, gql } = require('apollo-server');
const database = require('./database.js');
const projects = require('./projects.js');

const typeDefs = gql`
    type Project {
        id: String
        name: String
        recipient: String
    }

    type Query {
        projects: [Project]
    }

    type Mutation {
        saveProject(name: String!, recipient: String): Project

        removeProject(id: String!): Boolean
        # returns success or not for now, but could return updated project list?
    }
`;

const resolvers = {
    Query: {
        projects: async () => await projects.getAll()
    },
    Mutation: {
        saveProject: async (_, {name, recipient}) => await projects.saveProject(name, recipient),
        removeProject: async (_, {id}) => await projects.removeProject(id)
    }
}

database.connect().then("totes connected?");
const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})