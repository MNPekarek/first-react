import { useAppContext } from "../context/context"
import './Cart.css'


const Cart = () => {
    const {carrito, setCarrito} = useAppContext();

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter((producto) => producto.id  !== id))
    }

    return (
        <div className="cart-container">
            <h2>Carrito de compras</h2>
            {carrito.length === 0 ? (
                <p>El carrito esta vacío</p>
            ) : (
                carrito.map((producto) => (
                <div key={producto.id} className="cart-item">
                    <img src={producto.img} alt={producto.nombre} className="cart-img" />
                    <div className="cart-info">
                       <h3>{producto.nombre}</h3>
                       <p>Precio: ${producto.precio}</p>
                       <p>Cantidad: {producto.cantidad}</p>
                       <p>Total: ${producto.precio * producto.cantidad}</p>
                       <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                    </div>
                </div>
                ))
            )}
            <div className="cart-total">
                <h3>Total: ${carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)}</h3>
                <button className="checkout-btn">Finalizar Compra</button>                
            </div>
        </div>
    )
}

export default Cart;