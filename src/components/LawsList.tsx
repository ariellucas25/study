import { useContext } from "react";
import { LawsGeneratorContext, LawsGeneratorContextType, LawsGeneratorStore } from "../context/LawsGeneratorContext";

const LawsList: React.FC = () => {
    const { favoriteLaws } = useContext(LawsGeneratorContext) as LawsGeneratorContextType;

    return (


        <LawsGeneratorStore>
            <div>
        <h2>Lista de Leis</h2>
        <ul>
          {favoriteLaws.map((law, index) => (
            <li key={index}>
              <p>{law.titulo}</p>
              <p></p>
            </li>
          ))}
        </ul>
      </div>
        </LawsGeneratorStore>
        
    );
  };

  export default LawsList;