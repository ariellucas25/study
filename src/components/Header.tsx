import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Header: React.FC = () => {

    const image = "src/assets/machine-vision-svgrepo-com.svg"
    
    const handleClick= () => {
        alert('Botão 1 clicado!');
      };
    
      const handleClick2 = () => {
        alert('Botão 2 clicado!');
      };

    return (
        <div className="flex  px-10 py-5 text-blue-900 border-b justify-center">
            <div className='flex justify-between w-full max-w-5xl gap-4'>
                <div className="flex items-center">
                    <img src={image} className="w-12 flex flex-row mr-2"></img>
                    <div>
                        <Typography variant="h5" component="h2">Ariel UI Study</Typography>
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <Button variant="outlined" onClick={handleClick}>Login</Button>
                    <Button variant="outlined" onClick={handleClick2}>Criar conta</Button>
                </div>
            </div>
        </div>   
    );
}

export default Header;