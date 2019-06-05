import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({path:'variables.env'});
import jwt from 'jsonwebtoken';



const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers["authorization"];
    console.log(token);
    if(token !=="null"){
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
app.use(cors({
  origin:true,
  credentials:true
}));
server.applyMiddleware({ app, cors:false});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(
    `El servidor esta corriendo en http://localhost:5000${server.graphqlPath}`
  )
);
