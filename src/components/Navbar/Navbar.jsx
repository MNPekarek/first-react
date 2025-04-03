import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'
import logo from '../../assets/logo.webp'
import { Link } from 'react-router';



function Navbar() {  
    return (
      <header>
        <nav className='nav-bar'>
            <img src={logo} className='logo' alt="logo" />           
          <ul className='nav-bar-items'>
            <Link to="/">
               <li>Inicio</li>
            </Link>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
          <CartWidget/>
        </nav>
      </header>
    );
};

export default Navbar
