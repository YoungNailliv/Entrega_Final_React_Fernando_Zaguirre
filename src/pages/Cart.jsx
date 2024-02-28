import { Link } from "react-router-dom"


export const Cart = () => {
    return (
        <section className="bg-color-base flex flex-col items-center">
            <h1 className="text-9xl fontFamily-chicle p-3  text-s text-left w-[70%] m-auto">Carrito</h1>
            <div className=" bg-slate-100 w-full xl:w-[1500px] lg:[1000px] h-[400px] mb-[20px]">
                <div className="bg-[#F4DFC8] h-[50px]">
                </div>
                <p className="text-5xl fontFamily-chicle text-center mt-[100px]">No hay nada en tu carro de compra D:</p>
            </div>
            <Link to={"/shop/all"}>
                <button className="text-xl fontFamily-chicle p-3 border border-black rounded mb-[50px]"> Seguir Comprando</button>
            </Link>
        </section>
    )
}

