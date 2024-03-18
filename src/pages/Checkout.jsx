import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../fireBaseConfig';
import { Link } from 'react-router-dom';

export const Checkout = () => {

    const {cart, precioTotalCarrito,setCart} = useContext(CartContext);

    const [idCompra, setIdCompra] = useState();
    const [userInfo, setUserInfo] = useState({
        name:"",
        email:"",
        tel:"",
    })

    const envioFormulario = (event) => {
        event.preventDefault();
        let order = {
            buyer:userInfo,
            items:cart,
            total:precioTotalCarrito(),
        };

        let orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((res)=>{
            setIdCompra(res.id);
        });

        cart.forEach(producto => {
            let refDoc = doc(db, "productos", producto.id)
            updateDoc(refDoc, {stock: producto.stock - producto.quantity});
        });
        setCart([])
    }

    const capturarInput = (event) => {
        event.preventDefault();
        setUserInfo({...userInfo, [event.target.name]:event.target.value})
        
    }


    return (
        <section className='bg-color-base flex flex-col justify-center items-center text-center'>

            {
                idCompra ? (
                    <div>
                        <h1 className='text-8xl fontFamily-chicle py-16'>Muchas gracias por tu compra! <br className='mb-10'/> el id de tu compra es de: <br /> {idCompra}</h1> 
                        <Link to={"/shop/all"}><button className='border border-black px-5 py-3 hover:scale-105 ease-in duration-75 active:scale-100 w-[200px] rounded shadow mb-10'>Seguir comprando</button></Link>
                    </div>
                ):( 
            <div className='py-20 flex flex-col justify-center items-center'>
                <h1 className='text-6xl fontFamily-chicle mb-5'>Ya casi esta...Rellena tus datos para terminar la compra</h1>
                <form action="" onSubmit={envioFormulario}
                className='flex flex-col bg-color-base gap-5 justify-center items-center'>
                    <input type="text" name='name' className='w-full mx-3 md:w-[600px] my-2 h-[40px] rounded' placeholder='Nombre'onChange={capturarInput} required/>
                    <input type="email" name='email' className='w-full mx-3 md:w-[600px] my-2 h-[40px] rounded' placeholder='Correo Electronico' onChange={capturarInput} required/>
                    <input type="text" name='tel' className='w-full mx-3 md:w-[600px] my-2 h-[40px] rounded' placeholder='Numero de telefono'onChange={capturarInput} required/>
                    <button type="submit" className='border border-black px-5 py-3 hover:scale-105 ease-in duration-75 active:scale-100 w-[200px] rounded shadow'>Terminar la compra</button>
                </form>

            </div>
            )}
        </section>
    )
    }
