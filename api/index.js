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
        saveProject(name: String!, recipient: String): String
        # for now return object id, but later list of paginated projects?
        # more likely updated object ()
    }
`;

const resolvers = {
    Query: {
        projects: async () => await projects.getAll()
    },
    Mutation: {
        saveProject: async (_, {name, recipient}) => await projects.saveProject(name, recipient)
    }
}

database.connect().then("totes connected?");
const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})