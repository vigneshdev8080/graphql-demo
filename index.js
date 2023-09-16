const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require("@apollo/server/standalone")
const { makeExecutableSchema } = require("@graphql-tools/schema")
const { loadFilesSync } = require("@graphql-tools/load-files")
const path = require("path");

const typeArray = loadFilesSync(path.join(__dirname, "**/*.graphql"))
const resolverArray = loadFilesSync(path.join(__dirname, "**/*.resolver.js"))


async function startApolloServer() {
    const schema = makeExecutableSchema({
        typeDefs: typeArray,
        resolvers: resolverArray
    })

    const server = new ApolloServer({
        schema
    })

    const { url } = await startStandaloneServer(server, {

        listen: { port: 3000 },

    },);

    console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer()