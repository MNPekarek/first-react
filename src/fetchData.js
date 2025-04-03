import { productos } from "./productos";

export const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (productos) {
            resolve(productos);
        } else {
            reject(new Error("No se pudieron cargar los productos."));
        }
    }, 2000);    
});