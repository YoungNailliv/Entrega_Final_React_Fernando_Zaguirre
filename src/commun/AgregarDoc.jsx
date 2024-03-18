

import { addDoc, collection } from "firebase/firestore";
import {productos} from "../content/productos"
import { db } from "../fireBaseConfig";

export const AgregarDoc = () => {

    const rellenar = () => {

        let productosCollection = collection(db, "productos");

        productos.forEach(productos => {
            addDoc(productosCollection, productos )
        });

    }

    return (
        <button className="border border-black p-6"
        onClick={rellenar}
        >Agregar Productos</button>
    )
}
