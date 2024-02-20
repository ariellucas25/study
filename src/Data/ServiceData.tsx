import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

    export const httpLink = createHttpLink({
        uri: 'http://localhost:4000/graphql', // Coloque a URL do seu servidor GraphQL aqui
     });
  
    export const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache(),
    });