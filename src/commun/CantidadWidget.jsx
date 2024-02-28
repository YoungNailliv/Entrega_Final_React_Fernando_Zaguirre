import { useState } from "react"


const CantidadWidget = ( {stop} ) => {

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
        <div className="flex flex-row gap-1  w-[100px] justify-center align-middle text-3xl">
            <button 
            className="bg-white px-3 rounded-l-lg"
            onClick={restar}
            >-</button>
            <p className="bg-white px-3">{count}</p>
            <button 
            className="bg-white px-3 rounded-r-lg"
            onClick={sumar}
            >+
            </button>
            
        </div>
    )
}

export default CantidadWidget