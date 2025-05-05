import './CartWidget.css'
import { MdShoppingCart } from "react-icons/md";
import { useAppContext } from '../../context/context';
import { useState } from 'react';
import CartDropdown from '../CartDropdown/CartDropdown';


function CartWidget() {  

    const {carrito} = useAppContext();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (     
        <div className='cart'>
            <div onClick={toggleDropdown} style={{cursor: "pointer", position: "relative"}}>
            <MdShoppingCart size={24}/>
            {dropdownOpen && (
                <div>
                    <CartDropdown />
                </div> 
            )}               
            </div>
            <span> {carrito.reduce((acc, el) => acc + el.cantidad ,0)}</span>                       
        </div>
    );
};

export default CartWidget;