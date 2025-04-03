import { Link } from 'react-router';
import './Item.css';

function Item({ producto}) {   
    
    const {id, nombre, precio, stock} = producto;

    function agregarAlCarrito(prod){
        const nuevoProducto = {
            ...prod,
            cantidad:1,            
        };
        console.log("Vas a agregar", nuevoProducto);
    };

    return (
     <div className='item card p-4 modificarCard'>
        <h3 className='card-header'>{nombre}</h3> 
        <h5 className='card-body'>Precio: ${precio}</h5>    
        <p>Quedan {stock} disponibles</p>
        <button className='btn btn-secondary my-2' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button> 
        <Link to={`/detalle/${id}`}>
           <button className='btn'>Ver detalle</button>                 
        </Link> 
    </div>
    );
};            

export default Item;