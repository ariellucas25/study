import { useQuery } from "@apollo/client";
import { GET_FAVORITE_LAWS } from "../Data/ServiceData";
import LawType from "../models/LawModel";
import { useContext } from "react";
import { LawsGeneratorContext, LawsGeneratorContextType } from "../context/LawsGeneratorContext";

const FavoriteLaws = () => {
const { setCurrentLaw } = useContext(LawsGeneratorContext) as LawsGeneratorContextType
;

type responseType = {
  getFavoriteLaws: LawType[];
}

const { loading, error, data } = useQuery<responseType>(GET_FAVORITE_LAWS);

  if(loading) return <p>Carregando...</p>
  if(error) return <p>Ocorreu um erro..</p>
  

  console.log("loading:", loading);
  console.log("error:", error);
  console.log("data:", data);

  const handleListClick = (law: LawType) => {
    setCurrentLaw(law);
  }

  if (!data) return null; 
  return (
    <div className="print:hidden max-w-xl mt-3 p-3 bg-white rounded-md shadow-md">
    {data.getFavoriteLaws.length > 0 ? (
      <ul className="divide-y divide-gray-200">
          <h1 className="text-xl font-semibold mb-4">Minhas Leis Favoritas</h1>
          {data.getFavoriteLaws.map(law => (
             <li key={law.titulo} className="group relative cursor-pointer py-4 px-6 hover:bg-gray-100 transition-colors duration-200" onClick={() => handleListClick(law)}>
             <h2 className="text-lg font-semibold text-gray-800">{law.titulo}</h2>
             <span className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
               <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                 <path d="M9 5l7 7-7 7"></path>
               </svg>
             </span>
           </li>
        ))}
      </ul>
        
    ) : (
        <p>Nenhuma lei favorita encontrada.</p>
    )}
</div>
  );
};

export default FavoriteLaws;
