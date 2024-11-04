import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

export default function Contact() {
    return (
        <div className="container">
            <NavBar />
            <div className="container  h-[100vh] flex justify-center align-center">
                <form action="" className="md:w-[1000px] mt-16 bg-gray-800 rounded-md w-auto h-auto">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-4xl font-bold text-center text-white">Contacto</h1>
                        <p className="text-center text-white">¿Tienes alguna pregunta o comentario? Escríbenos</p>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" name="name" id="name" className="border-2 border-gray-400 p-2" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="border-2 border-gray-400 p-2" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="message">Mensaje</label>
                            <textarea name="message" id="message" className="border-2 border-gray-400 p-2"></textarea>
                        </div>
                        <button className="bg- text-white p-2 rounded-md mt-4">Enviar</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}