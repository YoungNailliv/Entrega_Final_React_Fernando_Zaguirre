import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const ResumeCart = () => {
    const {cart,eliminar} = useContext(CartContext)

    return (
        <div>
            {
                cart.map( (producto) => {
                    let precioTotal = producto.precio * producto.quantity
                    return(
                        <div key={producto.id}
                        className=" max-w-[1000px] p-10 flex flex-row items-center ">
                            <img src={producto.productImg} className="w-[100px] mx-[30px]" alt="" />
                            <div className="w-[100px] xl:w-[200px] m-[50px]">
                                <p className=" font-bold text-xl">{producto.nombreAlbum}</p>
                                <p>{producto.artista}</p>
                            </div>
                            <p className="w-[30px] xl:w-[100px] m-[30px] font-bold text-xl">${producto.precio}</p>
                            <p className="w-[30px] xl:w-[100px] m-[50px] font-bold text-xl">X</p>
                            <p className="w-[30px] xl:w-[100px] m-[50px] font-bold text-xl">{producto.quantity}</p>
                            <p className="w-[30px] xl:w-[100px] m-[50px] font-bold text-xl">${precioTotal}</p>
                            <button onClick={() => eliminar(producto.id)}
                            className=" bg-red-400 px-5 py-3 hover:scale-105 ease-in duration-75 active:scale-100 rounded text-white shadow">Eliminar</button>
                        </div>

                    )
                } )
            }
        </div>
    )
}
