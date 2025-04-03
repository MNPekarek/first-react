import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ItemCount from "../ItemCount/ItemCount";
import { fetchData } from "../../fetchData";
import Loader from "../Loader/Loader";

function ItemDetail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);

  function agregarAlCarrito(prod) {
    const nuevoProducto = {
      ...prod,
      cantidad: contador,
    };
    console.log("Vas a agregar", nuevoProducto);
    setContador(1);
  }

  useEffect(() => {
    fetchData()
      .then((response) => {
        const productoAMostar = response.find(el => el.id === parseInt(id));
        setProducto(productoAMostar);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
     loading ? (
      <div className="loaderContainer">
        <Loader />
      </div>
    )
         : 
         <div className="card p-4">
             {producto ? 
                <>
                    <h3 className="card-header">{producto.nombre}</h3>
                    <div className="card-body">
                        <h5>Precio: ${producto.precio}</h5>
                        <h5>Categoria: <b>{producto.categoria.toUpperCase()}</b></h5>
                        <p><b>{producto.descripcion}</b></p>
                        <p>Quedan <b>{producto.stock}</b> disponibles</p>
                        <ItemCount stock={producto.stock} contador={contador} setContador={setContador} />
                        <div className="containerButton">
                           <button className="btn my-2" onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
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
