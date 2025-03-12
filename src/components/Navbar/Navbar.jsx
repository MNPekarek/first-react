import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'
import logo from '../../assets/logo.webp'



function Navbar() {  
    return (
      <header>
        <nav className='nav-bar'>
            <img src={logo} className='logo' alt="logo" />           
          <ul className='nav-bar-items'>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
          <CartWidget/>
        </nav>
      </header>
    );
};

export default Navbar
