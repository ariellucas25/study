import { useContext, useEffect } from "react";
import { LawsGeneratorContext, LawsGeneratorContextType } from "../context/LawsGeneratorContext";



const RandomLaw = () => {
  const { generateRandomLaw, currentLaw } = useContext(LawsGeneratorContext) as LawsGeneratorContextType;

  useEffect(() => {
    generateRandomLaw();
  }, []);

  return (
    <div>
      <div className="max-w-xl mt-3 p-3 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">{currentLaw.titulo}</h2>
        <p className="text-gray-700 mb-4">{currentLaw.descricao}</p>
        <p className="text-gray-600 italic">{currentLaw.impacto}</p>
      </div>
    </div>
  );
};

export default RandomLaw;
