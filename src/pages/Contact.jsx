

export const Contact = () => {
    return (
        <section className="bg-color-base flex flex-col justify-center">
            <h1 className="text-8xl fontFamily-chicle mt-5 text-center">Contacto</h1>
            <div className="flex flex-row justify-around w-full lg:w-[80%] m-auto">
                <form action="" 
                className="flex flex-col w-[300px] md:w-[500px] gap-5 mt-5">
                    <input type="text" name="name" placeholder="Nombre" className="h-[40px] rounded-lg shadow-md"/>
                    <input type="email" name="email" placeholder="Correo Electronico" className="h-[40px] rounded-lg shadow-md"/>
                    <input type="tel" name="" placeholder="Telefono" className="h-[40px] rounded-lg shadow-md"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Escribe tu mensaje aqui..." className="rounded-lg shadow-md"></textarea>
                    <button type="submit" className="text-xl fontFamily-chicle p-3 border border-black rounded mb-[50px] px-5 py-3 hover:scale-105 ease-in duration-75 active:scale-100 shadow"> Enviar </button>
                </form>
                <div className="w-[300px] md:w-[500px] text-3xl">
                    <p>Si deseas pedir el catalogo, hacer encargos, reservas, dejarnos comentarios o cualquier otra cosa no dudes en escribirnos en nuestro correo.</p>
                    <br />
                    <p>Atento a las redes social para ver cuando nos encontramos en ferias y eventos.</p>
                    <br />
                    <p>FOR THE RECORD TEAM.</p>
                </div>

            </div>
        </section>
    )
}

