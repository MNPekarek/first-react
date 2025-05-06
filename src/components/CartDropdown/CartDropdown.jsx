import { useNavigate } from "react-router";
import { useAppContext } from "../../context/context"
import './CartDropdown.css'

const CartDropdown = () => {
    const {carrito} = useAppContext();
    const navigate = useNavigate();

    return (
        <div className="dropdown">
            <h3>Carrito 🛒</h3>
            {carrito.length === 0 ? (
                <p>Vacío</p>
            ) : (
                carrito.map((producto) => (
                    <div key={producto.id}>
                        <p>{producto.nombre} - {producto.cantidad} ${producto.precio * producto.cantidad}</p>
                    </div>
                ))
            )}
            <div className="total">
                <h4>Total: ${carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)}</h4>
            </div>
            <button onClick={() => navigate("/carrito")} className="btn">Ver carrito</button>
            
        </div>
    )
}

export default CartDropdown;