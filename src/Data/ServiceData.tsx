import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';

export const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql', 
    });

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

export const GET_FAVORITE_LAWS = gql`
    query {
        getFavoriteLaws {
            titulo
            descricao
            impacto
            isFavorite
        }
    }
`;

export const GET_LAWS = gql`
    query {
        getLaws {
            titulo
            descricao
            impacto
            isFavorite
        }
    }
`;

export const TOGGLE_FAVORITE = gql`
    mutation toFavorite($titulo: String!) {
        toFavorite(titulo: $titulo) {
            titulo
            descricao
            impacto
            isFavorite
        }
    }
`;
