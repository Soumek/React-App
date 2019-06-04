import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from "react";
import ReactDOM from "react-dom";

import { RootSession } from "./App";
// import ApolloClient, {InMemoryCache} from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache({
  addTypename: false
});
const request = operation => {
  const token = localStorage.getItem("token");
  operation.setContext({
    headers: {
      authorization: token
    }
  });
};

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || null
    }
  }));
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: "/graphql",
  credentials: "include"
});
const cliente = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors);
      console.log(networkError);
    }),
    authMiddleware,
    httpLink
  ]),
  cache
});

// const cliente= new ApolloClient({
//     uri:"http://localhost:5000/graphql",
//     //Enviar token al servidor
//     fetchOptions:{
//       credentials:'include'
//     },
//     request:operation=>{
//       const token=localStorage.getItem('token');
//       operation.setContext({
//         headers:{
//           authorization:token
//         }
//       })
//     },
//     cache:new InMemoryCache({
//       addTypename:false
//     }),
//     onError: ({networkError, graphQLErrors}) =>{
//       console.log('graphQLErrors', graphQLErrors);
//       console.log('networkError', networkError);
//     }
//   });

ReactDOM.render(
  <ApolloProvider client={cliente}>
    <RootSession />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
