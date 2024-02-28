import { useEffect } from "react"
import { categoriasProductos } from "../../content/categorias"
import { useState } from "react"
import { styles } from "../../content/styles";
import { CardProduct } from "../../components/CardProduct";
import { getProducts } from "../../content/productos";
import { BarraCategorias } from "../../commun/BarraCategorias";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const { category } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() =>{
        getProducts().then(resp => {
            if(category !== "all"){
                const productosFiltrados = resp.filter( (producto) => producto.categoria === category)
                setItems(productosFiltrados);
            } else {
                console.log(resp)
                setItems(resp)
            }
        })
    },[category]);

    return (
        <div className="bg-color-base flex flex-col justify-center items-center">
            <BarraCategorias/>  
            

            <div className="bg-color-base flex flex-row flex-wrap justify-center items-center lg:w-[1400px] m-auto">
                {
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

                            />
                        )
                    } )
                }
            </div>
        </div>
    )
}


export default ItemListContainer