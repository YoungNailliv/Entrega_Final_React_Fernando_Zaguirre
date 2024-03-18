import CantidadWidget from "./CantidadWidget";
import { useNavigate } from "react-router-dom";



export const ItemDetail = ({producto,onAdd}) => {
    const navigate = useNavigate();

    return (
        <section className="bg-color-base w-[70%] m-auto h-[100%] flex flex-col flex-wrap justify-center items-center">
            <div className="md:w-[90%] m-auto flex flex-row flex-wrap lg:flex-nowrap justify-around gap-5 mt-10 mb-10">
                <img src={producto.productImg} alt="" className="md:max-w-[600px]"/>
                <div className="flex flex-col flex-wrap gap-5 mt-10">
                    <h3 className="text-6xl"> {producto.nombreAlbum} </h3>
                    <div>
                        <p> Artista: {producto.artista} </p>
                        <p> Genero: {producto.genero}</p>
                        <p> Lanzamiento: {producto.year}</p>
                    </div>
                    <p className="text-4xl"> $ {producto.precio} </p>
                    <CantidadWidget stop={producto.stock} onAdd={onAdd}/>
                    <p className="md:w-[600px] w-full m-2 md:m-0"> { producto.descripcion} </p>
                </div>
            </div>
            <button onClick={() => navigate(-1)}
            className="border border-black w-[200px] h-[50px] mb-10 text-xl rounded">Seguir comprando...</button>
        </section>
    )
}
