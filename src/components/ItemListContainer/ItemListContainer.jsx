import { useEffect } from "react";
import "./ItemListContainer.css";
import Item from "../Item/Iteml";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { fetchData } from "../../fetchData";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState(null);

  const [productoFiltrado, setProductoFiltrado] = useState(null);

  useEffect(() => {
    fetchData(false)
      .then((response) => {
        setTodosLosProductos(response);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  });

  return (
    
    loading ? 
    <Loader />
    :
    <div>
      <div className="container-productos">
        {todosLosProductos.map((el) => {
            return <Item key={el.id} producto={el} filtrarProducto={setProductoFiltrado} />;
          })};
      </div>
      {productoFiltrado && <ItemDetail producto={productoFiltrado} volverAlInicio={() => setProductoFiltrado(null)}/>}
    </div>
  );
}

export default ItemListContainer;
