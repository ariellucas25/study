import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PrintIcon from '@mui/icons-material/Print';
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

  return (
    <div className=" p-3">
      <div className="p-4 rounded-xl border">
        <MenuItem icon={<ChangeCircleIcon />} onClick={generateRandomLaw}>
          Nova lei
        </MenuItem>
        <MenuItem icon={isFavorite ? <StarIcon /> : <StarOutlineIcon /> } onClick={handleToggleFavorite} >
        {isFavorite ? "Favorita" : "Favoritar"  }
        </MenuItem> 
        <MenuItem icon={<PrintIcon />} onClick={generateRandomLaw}>
          Imprimir
        </MenuItem>
      </div>
    </div>
  );
};

export default SideBar;
