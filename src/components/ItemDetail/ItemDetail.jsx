import { useEffect, /*useState*/ } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import { Link, useParams } from 'react-router';
import { fetchData } from '../../fetchData';


function ItemDetail() { 

    const {id} = useParams();
    
    // const [contador, setContador] = useState(1);
    

    // function agregarAlCarrito(prod){
    //     const nuevoProducto = {
    //         ...prod,
    //         cantidad:contador,            
    //     };
    //     console.log("Vas a agregar",nuevoProducto)
    //     setContador(1)
    // }

    useEffect(() => {
        fetchData()
              .then((response) => {
                const productoAMostar = response.find(el => el.id === parseInt(id))
                console.log(productoAMostar)
                // console.log(parseInt(id))        
                // setTodosLosProductos(response);
                // setLoading(false);
              })
              .catch((err) => console.error(err));
    }, []);

    return (
     <div className='card p-4'>
        <p>Detalle del producto seleccionado</p>        
        {/* <h3 className='card-header'>{nombre}</h3> 
        <div className='card-body'>
        <h5 >Precio: ${precio}</h5>
        <h5>Categoria: <b>{categoria.toUpperCase()}</b></h5>    
        <p><b>{descripcion}</b></p>
        <p>Quedan <b>{stock}</b> disponibles</p>

        <ItemCount stock={stock} contador={contador} setContador={setContador}/>

        <button className='btn btn-secondary my-2' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>  
        <Link to="/">
            <button className='btn btn-secondary my-2'>Volver al inicio</button>                 
        </Link>
        </div> */}
    </div>
    )
}            

export default ItemDetail;