import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import StarIcon from '@mui/icons-material/Star';
import PrintIcon from '@mui/icons-material/Print';
import ChecklistIcon from '@mui/icons-material/Checklist';
import MenuItem from './MenuItem';
import { useContext } from "react";
import { LawsGeneratorContext, LawsGeneratorContextType } from "../context/LawsGeneratorContext";



const SideBar: React.FC = () => {
  const { generateRandomLaw } = useContext(LawsGeneratorContext) as LawsGeneratorContextType;
  return (
    <div className=" p-3">
      <div className="p-4 rounded-xl border">
        <MenuItem icon={<ChangeCircleIcon />} onClick={generateRandomLaw}>
          Nova lei
        </MenuItem>
        <MenuItem icon={<StarIcon />} onClick={generateRandomLaw}>
          Favoritar
        </MenuItem>
        <MenuItem icon={<PrintIcon />} onClick={generateRandomLaw}>
          Imprimir
        </MenuItem>
        <MenuItem icon={<ChecklistIcon />} onClick={generateRandomLaw}>
          Meus favoritos
        </MenuItem>
      </div>
    </div>
  );
};

export default SideBar;
