import { icons } from './icons';
import MenuItem from './MenuItem';
import { useContext } from "react";
import { LawsGeneratorContext, LawsGeneratorContextType } from "../context/LawsGeneratorContext";
import { useMutation } from '@apollo/client';
import { TOGGLE_FAVORITE, GET_FAVORITE_LAWS, GET_LAWS } from '../Data/ServiceData'; 

const SideBar: React.FC = () => {
  const { generateRandomLaw, currentLaw, setCurrentLaw } = useContext(LawsGeneratorContext) as LawsGeneratorContextType;
  const isFavorite = currentLaw.isFavorite;

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    refetchQueries: [{ query: GET_FAVORITE_LAWS }, { query: GET_LAWS }],
    onCompleted: (data) => {
      setCurrentLaw({ ...currentLaw, isFavorite: data.toFavorite.isFavorite})
    },
  });

  const handleToggleFavorite = async () => {
    try {
        await toggleFavorite({ variables: { titulo: currentLaw.titulo } });
    } catch (error) {
        console.error('Erro ao alternar favorito:', error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print:hidden p-3">
      <div className="p-4 rounded-xl border">
        <MenuItem icon={<icons.ChangeCircleIcon />} onClick={generateRandomLaw}>
          Nova lei
        </MenuItem>
        <MenuItem icon={isFavorite ? <icons.StarIcon /> : <icons.StarOutlineIcon /> } onClick={handleToggleFavorite} >
        {isFavorite ? "Favorita" : "Favoritar"  }
        </MenuItem> 
        <MenuItem icon={<icons.PrintIcon />} onClick={handlePrint}>
          Imprimir
        </MenuItem>
      </div>
    </div>
  );
};

export default SideBar;
