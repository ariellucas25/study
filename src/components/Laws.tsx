import { useQuery } from "@apollo/client";
import { GET_LAWS } from "../Data/ServiceData";
import LawType from "../models/LawModel";

const Laws = () => {

type responseType = {
  getLaws: LawType[];
}

const { loading, error, data } = useQuery<responseType>(GET_LAWS);

  if(loading) return <p>Carregando...</p>
  if(error) return <p>Ocorreu um erro..</p>

  console.log("loading:", loading);
  console.log("error:", error);
  console.log("data:", data);

  return (
    <div>
      <div>
      {data?.getLaws.map(law => (
        <div key={law.titulo}>
          <h2>{law.titulo}</h2>
          <p>{law.isFavorite.toString()}</p>
          <br></br>
        </div>
      ))}
    </div>

    

    </div>
    
  );
};

export default Laws;
