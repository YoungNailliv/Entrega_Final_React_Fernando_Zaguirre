import CantidadWidget from "../commun/CantidadWidget";
import { useNavigate } from "react-router-dom";



export const ItemDetail = ({nombreAlbum,artista,year,genero,categoria,precio,descripcion,stock,productImg,oferta,id}) => {
    const navigate = useNavigate();

    return (
        <section className="bg-color-base w-[70%] m-auto h-[100%] flex flex-col flex-wrap justify-center items-center">
            <div className="md:w-[90%] m-auto flex flex-row flex-wrap lg:flex-nowrap justify-around gap-5 mt-10 mb-10">
                <img src={productImg} alt="" className="md:max-w-[500px]"/>
                <div className="flex flex-col flex-wrap gap-5 mt-10">
                    <h3 className="text-6xl"> {nombreAlbum} </h3>
                    <div>
                        <p> Artista: {artista} </p>
                        <p> Genero: {genero}</p>
                        <p> Lanzamiento: {year}</p>
                    </div>
                    <p className="text-4xl"> $ {precio} </p>
                    <CantidadWidget stop={stock}/>
                    <button className="border border-black w-[200px] h-[50px] text-xl rounded">Agregar al carro</button>
                    <p className="md:w-[600px] w-full m-2 md:m-0"> { descripcion} </p>
                </div>
            </div>
            <button className="border border-black w-[200px] h-[50px] mb-10 text-xl rounded">Seguir comprando...</button>
        </section>
    )
}
