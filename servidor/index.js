import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";
import dotenv from 'dotenv';
dotenv.config({path:'variables.env'});
import jwt from 'jsonwebtoken';

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    
    if(token !== "null"){
        try{
            //verificar el token del frontend(cliente)
            const usuarioActual=await jwt.verify(token,process.env.SECRETO);
           //Agregamos el usuario actual al req
            req.usuarioActual=usuarioActual;
            return {
                usuarioActual
            }
        } catch(err){   
            console.error(err);
        }
    }

  }
});
server.applyMiddleware({ app });

app.listen({ port: 5000 }, () =>
  console.log(
    `El servidor esta corriendo en http://localhost:5000${server.graphqlPath}`
  )
);
