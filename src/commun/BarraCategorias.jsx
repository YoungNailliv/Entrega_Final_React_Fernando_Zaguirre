import { Link, NavLink } from "react-router-dom"
import { categoriasProductos } from "../content/categorias"
import { styles } from "../content/styles"




export const BarraCategorias = () => {
    return (
        <div>
            <ul className="grid grid-cols-4 fontFamily-dosis list-none">
                {
                    categoriasProductos.map( (categoria) => {
                        
                        return(
                            <NavLink className={({isActive}) => isActive ? `${styles.NavLiActive}` : `${styles.NavLi}`}
                            key={categoria.id} to={`/shop/${categoria.id}`}>
                                {categoria.categoria}
                            </NavLink>
                        )
                    } )
                }
            </ul>
        </div>
    )
}
