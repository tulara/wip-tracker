const { ApolloServer, gql } = require('apollo-server');
const database = require('./database.js');
const projects = require('./projects.js');

const typeDefs = gql`
    type Project {
        id: String
        name: String
        recipient: String
        image: String
    }

    type Query {
        projects: [Project]
    }

    type Mutation {
        saveProject(name: String!, recipient: String): Project

        removeProject(id: String!): String!
        # returns the id of the project removed
    }
`;

const resolvers = {
    Query: {
        projects: async () => await projects.getAll()
    },
    Mutation: {
        saveProject: async (_, {name, recipient, image}) => await projects.saveProject(name, recipient, image),
        removeProject: async (_, {id}) => await projects.removeProject(id)
    }
}

database.connect().then("totes connected?");
const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})