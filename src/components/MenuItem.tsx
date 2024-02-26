import { Button } from "@mui/material";
import { LawsGeneratorStore } from '../context/LawsGeneratorContext';

type MenuItemPropsType = {
    icon: JSX.Element;
    children: string;
    onClick: () => void;
  }
  
  const MenuItem: React.FC<MenuItemPropsType> = ({ icon, children, onClick }) => {
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