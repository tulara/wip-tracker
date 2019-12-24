const { ApolloServer, gql } = require('apollo-server');

// retrieve me from db
const projects = [
    { 
        name: "Zaubersocks",
        recipient: "Grandma"
    },
    {
        name: "Harry Potter scarf",
        recipient: "Tristan"
    }
];

const typeDefs = gql`
    type Project {
        name: String
        recipient: String
    }

    type Query {
        projects: [Project]
    }
`;

const resolvers = {
    Query: {
        projects: async () => { return projects }
    }
}

const server = new ApolloServer({ typeDefs, resolvers});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
})