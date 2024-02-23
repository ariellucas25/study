import { useQuery } from "@apollo/client";
import { GET_FAVORITE_LAWS } from "../Data/ServiceData";
import LawType from "../models/LawModel";

const FavoriteLaws = () => {

type responseType = {
  getFavoriteLaws: LawType[];
}

const { loading, error, data } = useQuery<responseType>(GET_FAVORITE_LAWS);

  if(loading) return <p>Carregando...</p>
  if(error) return <p>Ocorreu um erro..</p>
  

  console.log("loading:", loading);
  console.log("error:", error);
  console.log("data:", data);

  if (!data) return null; 
  return (
    <div>
    {data.getFavoriteLaws.length > 0 ? (
        data.getFavoriteLaws.map(law => (
            <div key={law.titulo}>
                <h2>{law.titulo}</h2>
            </div>
        ))
    ) : (
        <p>Nenhuma lei favorita encontrada.</p>
    )}
</div>
  );
};

export default FavoriteLaws;
