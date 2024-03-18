import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ItemDetail } from "../commun/ItemDetail";
import { CartContext } from "../context/CartContext";
import { IsLoading } from "./IsLoading";
import {collection,doc,getDoc} from "firebase/firestore"
import { db } from "../fireBaseConfig";


export const Item = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState(null );
    const {agregarAlCarrito} = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(true)
    

    useEffect(() =>{
        setIsLoading(true);
        let productosCollection = collection( db , "productos" );

        let refProducto = doc( productosCollection, id )

        getDoc( refProducto )
        .then(res => {  
            setProducto( {...res.data(),id: res.id});
            
        }).finally(() => setIsLoading(false));

    },[id]);

    
    const onAdd = (count) => {
        const infoProducto = {...producto,quantity:count};
        agregarAlCarrito(infoProducto, id);
    }; 

        
    return (
        <div className="bg-color-base h-[100%]">
            { isLoading ? <IsLoading/> :<h1> <ItemDetail producto={producto} onAdd={onAdd}/> </h1>}
        </div>
    )
}
