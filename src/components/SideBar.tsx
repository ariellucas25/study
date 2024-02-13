import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { Button } from "@mui/material";
import { useContext } from "react";
import { LawsGeneratorContext, LawsGeneratorContextType } from "../context/LawsGeneratorContext";

interface MenuItemProps {
  icon: JSX.Element;
  children: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, children, onClick }) => {
  return (
    <div className="">
      <Button startIcon={icon} onClick={onClick} >
        {children}
      </Button>
    </div>
  );
};

const SideBar: React.FC = () => {
  const { generateRandomLaw } = useContext(LawsGeneratorContext) as LawsGeneratorContextType;
  return (
    <div className=" p-3">
      <div className="p-4 rounded-md border">
        <MenuItem icon={<ChangeCircleIcon />} onClick={generateRandomLaw}>
          Nova lei
        </MenuItem>
      </div>
    </div>
  );
};

export default SideBar;
