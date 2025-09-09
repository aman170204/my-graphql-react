import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {ApolloProvider,ApolloClient,InMemmoryCache} from '@apollo/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

//uncomment this if you want to use your api

// const client = new ApolloClient({
//   uri: "http://localhost:5002/graphql",
//   cache: new InMemmoryCache()
// });

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>  
      {/* add this when you want to call appolo library */}
    <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
