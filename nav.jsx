import './nav.css';
import './styles.jsx';
import { Header } from './styles';
import {Button} from 'antd';
import CartWidget from '../cartwidget/cartwidget';


const Navbar = () => {
    const optionsMenu = ['INICIO', 'PRODUCTOS', 'SERVICIOS', 'CONTACTO'];
       return (
        <header>
            <nav>
                <div>
                   <img src="../img/logo.png" alt="Logo"/>
                </div>
                <Menu>
                    {optionsMenu.map((option, index)=>
                    <li key={index}>
                        <a href=" ">
                        {option}
                        </a>
                    </li>)}
                </Menu>
                <div className='btn-box'>
                    <Button>Registro</Button>
                </div>
            </nav>    
                <CartWidget />
        </header>
    );
 }

export default Navbar  

   
