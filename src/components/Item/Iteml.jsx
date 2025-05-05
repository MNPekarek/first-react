import { Link } from 'react-router';
import './Item.css';
import { useAppContext } from '../../context/context';

function Item({ producto}) {   
    
    const {id, nombre, img, precio, stock} = producto;

   const {agregarAlCarrito} = useAppContext();

    return (
     <div className='item card p-4 modificarCard'>
        <h3 className='card-header'>{nombre}</h3> 
        <img src={img} alt={nombre} />
        <h5 className='card-body'>Precio: ${precio}</h5>    
        <p>Quedan {stock} disponibles</p>
        <button className='btn my-2' onClick={() => agregarAlCarrito(producto, 1)}>Agregar al carrito</button> 
        <Link to={`/detalle/${id}`}>
           <button className='btn'>Ver detalle</button>                 
        </Link> 
    </div>
    );
};            

export default Item;