import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { LawsGeneratorStore, LawsGeneratorContextType, LawsGeneratorContext } from '../context/LawsGeneratorContext';

type MenuItemPropsType = {
    icon: JSX.Element;
    children: string;
    onClick: () => void;
  }
  
  const MenuItem: React.FC<MenuItemPropsType> = ({ icon, children, onClick }) => {
    const { generateRandomLaw, favoriteLaw, currentLaw } = useContext(LawsGeneratorContext) as LawsGeneratorContextType;
    const [isFavorite, setIsFavorite] = useState(currentLaw.isFavorite)


    return (
      <div className="">
        <LawsGeneratorStore>
          <Button startIcon={icon} onClick={onClick} >
            {children}
          </Button>
        </LawsGeneratorStore>
        
      </div>
    );
  };

  export default MenuItem;