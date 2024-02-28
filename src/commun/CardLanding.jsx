import { NavLink } from "react-router-dom"
import { contenidoCards } from "../content/cardLanding"


export const CardLanding = () => {
    return (
        <div className="flex flex-col gap-16 justify-center items-center">
        {
            contenidoCards.map( (contenido) => {

                return(
                    <div className="my-10 border border-black w-full md:w-[500px] h-[150px] flex flex-col gap-[50px] rounded justify-center items-center">
                        <p> {contenido.texto}</p>
                        <NavLink to={`/shop/${contenido.categoria}`} 
                        className={ `border border-black p-2 w-[100px] rounded text-center `}>
                            <button> Ver mas </button></NavLink>
                    </div>
                )
            })
        }
        </div>
    )
}
