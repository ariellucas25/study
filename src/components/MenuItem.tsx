import { Button } from "@mui/material";

type MenuItemPropsType = {
    icon: JSX.Element;
    children: string;
    onClick: () => void;
  }
  
  const MenuItem: React.FC<MenuItemPropsType> = ({ icon, children, onClick }) => {
    return (
      <div className="">
        <Button startIcon={icon} onClick={onClick} >
          {children}
        </Button>
      </div>
    );
  };

  export default MenuItem;