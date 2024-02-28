import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../content/productos";
import { ItemDetail } from "../components/ItemDetail";


export const Item = () => {

    const { id } = useParams();
        const [producto, setProducto] = useState(null );
        console.log(producto);
    useEffect( () => {
        getProduct(id).then(res => {
            setProducto(res);
        })
    },[] )
        
    return (
        <div className="bg-color-base">
            {producto && <h1> <ItemDetail {...producto}/> </h1>}
        </div>
    )
}
