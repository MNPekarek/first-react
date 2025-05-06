import "./ItemDetail.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";
import { useAppContext } from "../../context/context";

function ItemDetail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);

  const { productos, agregarAlCarrito } = useAppContext();

  useEffect(() => {
    if (productos.length > 0) {
      const productoAMostar = productos.find((el) => el.id === parseInt(id));
      setProducto(productoAMostar);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [productos, id]);

  if (loading) {
    return (
      <div className="loaderContainer">
        <Loader />
      </div>
    );
  }

  if (!producto) {
    return <p>Producto no encontrado con el id {id}</p>;
  }

  const { nombre, img, precio, categoria, descripcion, stock } = producto;

  return (
    <div className="item-detail-container">
      <div className="item-detail-img">
        <img src={img} alt={nombre} />
      </div>
      <div className="item-detail-info">
        <h3 className="card-header">{nombre}</h3>
        <h5>Precio: ${precio}</h5>
        <h5>
          Categoria: <b>{categoria}</b>
        </h5>
        <p>
          
          Quedan <b>{stock}</b> disponibles
        </p>
        <p>
          <b>{descripcion}</b>
        </p>
        <ItemCount
          stock={stock}
          contador={contador}
          setContador={setContador}
        />
        <div className="containerButton">
          <button
            className="btn my-2"
            onClick={() => agregarAlCarrito(producto, contador)}
          >
            Agregar al carrito{" "}
          </button>
          <Link to="/">
            <button className="btn my-2">Volver al inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
