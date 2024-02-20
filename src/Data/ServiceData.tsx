import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

export const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql', 
    });

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export const GET_FAVORITE_LAWS = gql`
    query {
        favoriteLaws {
            titulo
            descricao
            impacto
        }
    }
`;

export const GET_LAWS = gql`
    query {
        laws {
            titulo
            descricao
            impacto
        }
    }
`;
    