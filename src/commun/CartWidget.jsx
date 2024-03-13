import { useContext } from "react";
import { CartContext } from "../context/CartContext";



export const CartWidget = () => {

    const { cart, getTotalItems } = useContext(CartContext);



    return (
        <div className="flex flex-row justify-center items-center text-current">
            {/* <img src="/cart.svg" alt="" className="w-[50px]"/> */}
            <p>CART </p>
            <p> ({ getTotalItems() }) </p>
        </div>
    )
}
