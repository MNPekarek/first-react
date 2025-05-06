import { Link } from "react-router";
import "./Item.css";


function Item({ producto }) {
  const { id, nombre, img, precio, stock } = producto;

  

  return (
    <Link to={`/detalle/${id}`} className="link-card">
      <div className="item card p-4 modificarCard">
        <h3 className="card-header">{nombre}</h3>
        <img src={img} alt={nombre} />
        <h5 className="card-body">Precio: ${precio}</h5>
        <p>Quedan {stock} disponibles</p>
      </div>
    </Link>
  );
}

export default Item;
