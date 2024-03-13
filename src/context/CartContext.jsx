import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartContextProvider = (  {children}  ) => {
    
    const [cart,setCart] = useState([]);

    const getTotalItems = () => {
        const total = cart.reduce((acc, elemento) => {
            return acc + elemento.quantity;
        },0);
        return total
    }


    const eliminar = ( id ) => {
        Swal.fire({
            title: "Estas seguro que quieres eliminar el producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "green",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar Producto",
            cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    const newCart = cart.filter(elemento => elemento.id !== id)
                    setCart([...newCart]);
                    Swal.fire({
                        title: "Se elimino el producto",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 800,
                    });}
            });
    }


    const limpiarCarrito = () => {
        if(cart.length > 0){

            Swal.fire({
                title: "Estas seguro que quieres vaciar el carito?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "green",
                cancelButtonColor: "#d33",
                confirmButtonText: "Vaciar carrito",
                cancelButtonText: "Cancelar"
                }).then((result) => {
                    if (result.isConfirmed) {
                        setCart([]);
                        Swal.fire({
                            
                            title: "Se ha vaciado el carrito",
                            icon: "success"
                        });}
                });
            

        }
    }
    
    const precioTotalCarrito = () => {
        if(cart.length > 0){
            let precioTotal = cart.reduce((acc, item) => {
                return acc += item.precio * item.quantity;
            },0);
            return precioTotal;
        }
        
    }


    const agregarAlCarrito = ( infoProducto, id ) => {
        let isInCart = cart.some( (elemento) => elemento.id === infoProducto.id);

        if(isInCart){
            let productoExistente = cart.find( (elemento) => elemento.id === id);
            let cantidadTotal = infoProducto.quantity + productoExistente.quantity;
            
            if(cantidadTotal <= infoProducto.stock){
                infoProducto = {...productoExistente,quantity:cantidadTotal};
                let nuevoCart = cart.filter( producto => producto.id !== infoProducto.id);
                setCart([...nuevoCart,infoProducto]);
                Swal.fire({
                    icon: "success",
                    title: "Agregado al carrito!",
                    showConfirmButton: false,
                    timer: 800
                });
            }else {
                infoProducto = {...productoExistente,quantity:infoProducto.stock};
                let nuevoCart = cart.filter( producto => producto.id !== infoProducto.id);
                setCart([...nuevoCart,infoProducto]);
                Swal.fire({
                    icon: "error",
                    title: "ya alcanzaste el maximo de este producto",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }else {
            Swal.fire({
                icon: "success",
                title: "Agregado al carrito!",
                showConfirmButton: false,
                timer: 800
            });
            setCart([...cart,infoProducto]);
        }
        

        
    }

    let data = {
        cart,
        setCart,
        getTotalItems,
        eliminar,
        agregarAlCarrito,
        limpiarCarrito,
        precioTotalCarrito,
    }

    return <CartContext.Provider value={ data }>
            { children }
        </CartContext.Provider>
    
}
