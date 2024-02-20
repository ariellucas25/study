import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PrintIcon from '@mui/icons-material/Print';
import ChecklistIcon from '@mui/icons-material/Checklist';
import MenuItem from './MenuItem';
import { useContext } from "react";
import { LawsGeneratorContext, LawsGeneratorContextType } from "../context/LawsGeneratorContext";

const SideBar: React.FC = () => {
  const { generateRandomLaw, favoriteLaw, showFavoriteLaws, currentLaw } = useContext(LawsGeneratorContext) as LawsGeneratorContextType;
  const isFavorite = currentLaw.isFavorite;
  return (
    <div className=" p-3">
      <div className="p-4 rounded-xl border">
        <MenuItem icon={<ChangeCircleIcon />} onClick={generateRandomLaw}>
          Nova lei
        </MenuItem>
        <MenuItem icon={isFavorite ? <StarIcon /> : <StarOutlineIcon /> } onClick={favoriteLaw} >
          Favoritar
        </MenuItem>
        <MenuItem icon={<PrintIcon />} onClick={generateRandomLaw}>
          Imprimir
        </MenuItem>
        <MenuItem icon={<ChecklistIcon />} onClick={showFavoriteLaws}>
          Meus favoritos
        </MenuItem>
      </div>
    </div>
  );
};

export default SideBar;
