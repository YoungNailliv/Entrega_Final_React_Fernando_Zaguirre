import { Link, NavLink } from "react-router-dom"
import { styles } from "../content/styles"
import { BarraCategorias } from "../commun/BarraCategorias"
import { CartWidget } from "../commun/CartWidget"
import { categoriasProductos } from "../content/categorias" 
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


export const Navbar = () => {
    const categoria = categoriasProductos[3];
    
    return(
        <header className="bg-color-base w-full">
            <nav className="h-min-fit  md:max-w-[80%] m-auto bg-color-base ">
                <div>
                    <ul className=" grid grid-cols-4 fontFamily-dosis list-none">
                        <NavLink 
                        className={({isActive}) => isActive ? `${styles.NavLiActive}` : `${styles.NavLi}`} 
                        to="/">HOME</NavLink >

                        <NavLink  className={({isActive}) => isActive ? `${styles.NavLiActive}` : `${styles.NavLi}`
                        } to={`/shop/${categoria.id}`}>SHOP</NavLink >
                        <NavLink  className={({isActive}) => isActive ? `${styles.NavLiActive}` : `${styles.NavLi}`
                        } to="/cart"> <CartWidget/> </NavLink >
                        <NavLink className={({isActive}) => isActive ? `${styles.NavLiActive}` : `${styles.NavLi}`
                        } to="/contact">CONTACT</NavLink >
                    </ul>
                </div>
                <div className="w-full  text-center">
                    <h1 className="text-9xl fontFamily-chicle p-3 gradient-text text-s">FOR THE RECORD</h1>
                </div>
                <div className="text-center border border-black p-1 fontFamily-dosis text-lg">
                    <p className=" text">DESCUENTO 20% EN LA COMPRA DE MAS DE 3 VINILOS O CDS * ENVIO GRATIS A TODO CHILE! </p>
                </div>
            </nav>
        </header>
    )
}