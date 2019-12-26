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
`;

const resolvers = {
    Query: {
        projects: async () => await projects.getAll()
    }
}

database.connect().then("totes connected?");
const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})