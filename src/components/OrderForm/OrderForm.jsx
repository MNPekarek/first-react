import { useState } from "react";
import "./OrderForm.css";
import OrderReview from "../OrderReview/OrderReview";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Swal from "sweetalert2";
import { useAppContext } from "../../context/context";
import { useNavigate } from "react-router";


const ordenesCollection = collection(db, "ordenes");

const OrderForm = () => {
  const {carrito, setCarrito} = useAppContext();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "creditcard",
  });

  const [showReview, setShowReview] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowReview(true);
  };

  const handleConfirm = async () => {
    if (!formData.name || !formData.email || !formData.address) {
        console.log("Todos los campos son obligatorios.");
        return;
    }
    const orderData = {
      name: formData.name,
      email: formData.email,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      items: carrito.map(item => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.cantidad,
        precio: item.precio
      })),
      date: new Date().toISOString(),
    }
    
    try {
        const response = await addDoc(ordenesCollection, orderData);

        setCarrito([]);

        Swal.fire({
          title: "¡Orden confirmada!",          
          text: `Tu pedido numero: ${response.id} fue registrado con éxito`,
          icon: "success",
          confirmButtonText: "Ir a la tienda",
          showConfirmButton: true,
        }).then(() => {
          navigate("/");
        })
    } catch (error) {
        console.error("Error al crear la orden:", error)
    }        
  }

  return (
    <div className="container mt-5">
        {showReview ? (
            <OrderReview formData={formData} onEdit={() => setShowReview(false)} onConfirm={handleConfirm} />
        ) : (
            
      <form onSubmit={handleSubmit} className="border p-4 rounded">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange} 
            required
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="mb-3">
            <label className="form-label">Método de pago</label>
            <select className="form-select" name="paymentMethod" value={formData.paymenthMethod} onChange={handleChange}>
                <option value="creditCard">Tarjeta de Crédito</option>
                <option value="paypal">Paypal</option>
                <option value="mercadoPago">Mercado Pago</option>
            </select>
        </div>
        <button type="submit" className="btn btn-primary">Confirmar Pedido</button>
      </form>
        )}
    </div>
  );
};

export default OrderForm;
