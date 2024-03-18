import { useEffect } from "react"
import { useState } from "react"
import { CardProduct } from "../commun/CardProduct";
import { BarraCategorias } from "../commun/BarraCategorias";
import { useParams } from "react-router-dom";
import { IsLoading } from "./IsLoading";
import { db } from "../fireBaseConfig";
import {collection,getDocs, query, where} from "firebase/firestore"
import { AgregarDoc } from "../commun/AgregarDoc";

const ItemListContainer = () => {

    const { category } = useParams();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        setIsLoading(true);

        let productosCollection = collection( db , "productos" );
        
        let consulta;

        if(category !== "all"){
            const productosFiltrados = query( productosCollection , where("categoria", "==", category));
            consulta = productosFiltrados;
        }else{
            consulta = productosCollection;
        }
        
        getDocs( consulta )
        .then(res => {
        const productos = res.docs.map( (producto) => {
                return {...producto.data(), id:producto.id}});
            setItems(productos)})
            .finally(() => setIsLoading(false));
    },[category]);

    return (
        <div className="bg-color-base flex flex-col flex-wrap justify-center items-center">
            <BarraCategorias/>  

            <div className="bg-color-base flex flex-row flex-wrap justify-center items-center w-full xl:w-[1400px] m-auto">
                {
                    isLoading ? <IsLoading/>: 
                    (
                        items.map( (producto) => {
                            return (
                                <CardProduct key={producto.id}
                                id={producto.id} 
                                nombreAlbum={producto.nombreAlbum}
                                artista={producto.artista}
                                year={producto.year}
                                genero={producto.genero}
                                categoria={producto.categoria}
                                precio={producto.precio}
                                descripcion={producto.descripcion}
                                stock={producto.stock}
                                productImg={producto.productImg}
                                />)
                        } )
                    )

                }
            </div>
        </div>
    )
}


export default ItemListContainer