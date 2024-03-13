import { useState } from "react"


const CantidadWidget = ( {stop,onAdd} ) => {

    const [count, setCount] = useState(1)

    const sumar = () => {
        if(count < stop){
            setCount( count + 1 );
        }
    }
    const restar = () => {
        if(count != 1){
            setCount ( count - 1 );
        }
    };

    return (
        <div>

            <div className="flex flex-row gap-1  w-[100px] justify-center align-middle text-3xl">
                <button 
                className="bg-white px-3 rounded-l-lg"
                onClick={restar}
                disabled = {count === 1 ? true : false}
                >-</button>
                <p className="bg-white px-3">{count}</p>
                <button 
                className="bg-white px-3 rounded-r-lg"
                onClick={sumar}
                disabled = {count === stop ? true : false}
                >+
                </button>
            </div>
            <button className="border border-black w-[200px] h-[50px] text-xl rounded mt-10" onClick={ () => onAdd(count) }>Agregar al carro</button>
        
        </div>
    )
}

export default CantidadWidget