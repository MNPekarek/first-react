import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ItemCount from "../ItemCount/ItemCount";
// import { fetchData } from "../../fetchData";
import Loader from "../Loader/Loader";
import { useAppContext } from "../../context/context";

function ItemDetail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);

  const { productos, agregarAlCarrito} = useAppContext();


  useEffect(() => {
    if (productos.length > 0) {
      const productoAMostar = productos.find(el => el.id === parseInt(id));
      setProducto(productoAMostar);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [productos, id]);

  return (
     loading ? (
      <div className="loaderContainer">
        <Loader />
      </div>
    )
         : 
         <div className="item card p-4 modificarCard">
             {producto ? 
                <>
                    <h3 className="card-header">{producto.nombre}</h3>
                    <img src={producto.img} alt={producto.nombre} />
                    <div className="card-body modificarCardBody">
                        <h5>Precio: ${producto.precio}</h5>
                        <h5>Categoria: <b>{producto.categoria}</b></h5>
                        <p><b>{producto.descripcion}</b></p>
                        <p>Quedan <b>{producto.stock}</b> disponibles</p>
                        <ItemCount stock={producto.stock} contador={contador} setContador={setContador} />
                        <div className="containerButton">
                           <button className="btn my-2" onClick={() => agregarAlCarrito(producto, contador)}>Agregar al carrito</button>
                           <Link to="/">
                               <button className="btn my-2">Volver al inicio</button>
                           </Link>
                        </div>                        
                    </div>
                </>
                : 
               
                <p>Producto no encontrado con el id {id}</p>
             }
         </div>
        );
};

export default ItemDetail;
