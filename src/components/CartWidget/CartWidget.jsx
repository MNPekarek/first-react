import './CartWidget.css'
import { MdShoppingCart } from "react-icons/md";

function CartWidget() {  
    return (     
        <div className='cart'>
            <MdShoppingCart />
            <p>(5)</p> 
        </div>
    );
};

export default CartWidget;