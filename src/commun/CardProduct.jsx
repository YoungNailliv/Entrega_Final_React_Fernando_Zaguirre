import { Link } from "react-router-dom"
import CantidadWidget from "./CantidadWidget"

export const CardProduct = ( {nombreAlbum,artista,year,genero,categoria,precio,descripcion,stock,productImg,oferta,id} ) => {

    return(
        <div className="h-[450px] w-[300px] bg-color-card py-6 px-4 m-5  rounded fontFamily-dosis text-lg flex flex-col gap-3">
            <img className="w-[200px h-[240px]" src={productImg} alt="" />
            <div>
                <h2 className=" font-medium text-2xl">{nombreAlbum}</h2>
                <p>{artista}</p>
                <p>$ { precio }</p>
                
            </div>
            <Link to={`/item/${id}`}>
                <button className="border border-black w-[100px] rounded">Detalles</button>
            </Link>
        </div>
    )
}