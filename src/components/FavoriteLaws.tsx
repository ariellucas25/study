import { gql, useQuery } from "@apollo/client";

const FavoriteLaws = () => {
    const GET_FAVORITE_LAWS = gql`
    query {
      favoriteLaws {
        titulo
        descricao
        impacto
      }
    }
  `;
  

type LawType = {
  titulo: string;
  descricao: string;
  impacto: string;
  ano?: string;
  isFavorite?: boolean;
}

type responseType = {
  favoriteLaws: LawType[];
}

const { data } = useQuery<responseType>(GET_FAVORITE_LAWS);

  return (
    <div>
      {data?.favoriteLaws.map(law => (
        <div key={law.titulo}>
          <h2>{law.titulo}</h2>
          <p>{law.descricao}</p>
          <p>{law.impacto}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteLaws;
