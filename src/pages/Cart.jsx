import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { NoCart } from "../commun/NoCart";
import { ResumeCart } from "../commun/ResumeCart";



export const Cart = () => {
    const {cart, getTotalItems,limpiarCarrito,precioTotalCarrito} = useContext(CartContext);

    
    return (
        <section className="bg-color-base flex flex-col items-center">
            <h1 className="text-9xl fontFamily-chicle p-3  text-s text-left w-[70%] m-auto">Carrito</h1>
            <div className="flex flex-col items-end max-w-[90%]">
                <div className=" bg-slate-100 w-full xl:w-[1400px] lg:[1000px] h-[600px] mb-[20px]  overflow-y-scroll">
                    <div className="bg-[#F4DFC8] h-[50px]">
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        {
                            getTotalItems() > 0 ? <ResumeCart/> : <NoCart/>
                        }
                    </div>
                </div>
                <div className=" bg-amber-900 w-[200px] h-[50px] text-white fontFamily-chicle text-3xl rounded flex justify-center items-center ">
                        <p className=""> TOTAL: ${precioTotalCarrito()} </p>
                </div>
                <Link to={"/checkout"}>
                    <button className=" bg-green-800 w-[200px] h-[50px] text-white fontFamily-chicle text-3xl mt-2 rounded hover:scale-105 ease-in duration-75 active:scale-100 shadow">PAGAR</button>
                </Link>
            </div>

            <button onClick={limpiarCarrito} className="text-xl fontFamily-chicle p-3 border border-black rounded mb-[50px] px-5 py-3 hover:scale-105 ease-in duration-75 active:scale-100 shadow"> Vaciar Carro</button>
            <Link to={"/shop/all"}>
                <button className=" px-5 py-3 hover:scale-105 ease-in duration-75 active:scale-100 text-xl fontFamily-chicle p-3 border border-black rounded mb-[50px] shadow"> Seguir Comprando</button>
            </Link>
        </section>
    )
}

