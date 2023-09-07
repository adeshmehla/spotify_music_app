const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const {default:axios} = require("axios");

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
        type Songs {
            id:ID!
            name:String!
            artist:String!
            url:String!
            top_track:Boolean!
            cover:String!
        }
        type Query{
            getSongs:[Songs]
        }
        `,
        resolvers:{
            Query:{
            getSongs: async () =>
            (await axios.get("https://cms.samespace.com/items/songs")).data.data,
        }
        } 
    });

    app.use(bodyParser.json());
    app.use(cors());
    await server.start();

    app.use("/graphql", expressMiddleware(server))
    app.listen(8000, () => console.log("server run"))
}

startServer()