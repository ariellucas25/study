import { useQuery } from "@apollo/client";
import { GET_FAVORITE_LAWS } from "../Data/ServiceData";
import LawType from "../models/LawModel";

const FavoriteLaws = () => {

type responseType = {
  favoriteLaws: LawType[];
}

const { loading, error, data } = useQuery<responseType>(GET_FAVORITE_LAWS);

  if(loading) return <p>Carregando...</p>
  if(error) return <p>Ocorreu um erro..</p>

  console.log("loading:", loading);
  console.log("error:", error);
  console.log("data:", data);

  return (
    <div>
      {data?.favoriteLaws.map(law => (
        <div key={law.titulo}>
          <h2>{law.titulo}</h2>
        </div>
      ))}
    </div>
  );
};

export default FavoriteLaws;
