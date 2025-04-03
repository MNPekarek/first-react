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
            <Link to="/" className='link'>
               <li>Inicio</li>
            </Link>
            <Link to="/categoria/indumentaria" className='link'>
               <li>Indumentaria</li>
            </Link>
            <Link to="/categoria/calzado" className='link'>
               <li>Calzado</li>
            </Link>
          </ul>
          <CartWidget/>
        </nav>
      </header>
    );
};

export default Navbar
