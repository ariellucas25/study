import { useState, useEffect } from "react";
import lawsData from "../Data/lawsData.json";
import { Button } from "@mui/material";
import RefreshIcon from '@mui/icons-material/Refresh';

interface Law {
  titulo: string;
  descricao: string;
  impacto: string;
}
const RandomLaw = () => {

  const generateRandomLaw = () => {
    const randomIndex = Math.floor(Math.random() * lawsData.lawsData.length);
    setCurrentLaw(lawsData.lawsData[randomIndex]);
  };
  
  const [currentLaw, setCurrentLaw] = useState<Law>({
    titulo: "",
    descricao: "",
    impacto: "",
  });
  
  useEffect(() => {
    generateRandomLaw();
  }, []);

  return (
    <div>
      <div className="max-w-xl mt-3 p-3 bg-white rounded-md shadow-md">
        <Button onClick={generateRandomLaw} startIcon={<RefreshIcon />}></Button>
        <h2 className="text-xl font-semibold mb-4">{currentLaw.titulo}</h2>
        <p className="text-gray-700 mb-4">{currentLaw.descricao}</p>
        <p className="text-gray-600 italic">{currentLaw.impacto}</p>
      </div>
    </div>
  );
};

export default RandomLaw;
