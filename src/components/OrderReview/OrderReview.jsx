import { useAppContext } from "../../context/context";


const OrderReview = ({ formData, onEdit, onConfirm}) => {

    const {carrito} = useAppContext();
    return (
        <div className="container mt-5">
            <h2>Revisión del Pedido</h2>
            <div className="border p-4 rounded">
                <p><strong>Nombre:</strong>{formData.name}</p>
                <p><strong>Correo:</strong>{formData.email}</p>
                <p><strong>Dirección:</strong>{formData.address}</p>
                <p><strong>Método de pago:</strong>{formData.paymentMethod}</p>
            </div>
            {carrito.map((producto) => 
            <div key={producto.id} className="border p-4 rounded">
                <img src={producto.img} alt={producto.nombre} className="cart-img" />
                    <div className="cart-info">
                       <h3>{producto.nombre}</h3>
                       <p>Precio: ${producto.precio}</p>
                       <p>Cantidad: {producto.cantidad}</p>
                       <p>Total: ${producto.precio * producto.cantidad}</p>
                    </div>
                
            </div>)}

                <div className="mt-4 d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={onEdit}>Editar</button>
                    <button className="btn btn-primary" onClick={onConfirm}>Confirmar Pedido</button>
                </div>
        </div>
    )
}


export default OrderReview;