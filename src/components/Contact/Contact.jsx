import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"

export default function Contact() {
    return (
        <div className="container">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              />
            </div>
            <NavBar />
            
            <div className="container  h-[100vh] flex justify-center items-center">

                <form action="" className="bg-gray-800 rounded-md h-3/4 w-1/3 shadow-lg shadow-[blueviolet]" >
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-4xl font-bold text-center text-white">Contacto</h1>
                        <p className="text-center text-white">¿Tienes alguna pregunta o comentario? Escríbenos</p>
                        <div className="flex flex-col w-1/2">
                            <label className="text-white" htmlFor="name">Nombre</label>
                            <input type="text" name="name" id="name" className="border-2 border-gray-400 p-2 rounded" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-white" htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="border-2 border-gray-400 p-2 rounded" />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label className="text-white" htmlFor="message">Mensaje</label>
                            <textarea name="message" id="message" className="border-2 border-gray-400 p-2 rounded"></textarea>
                        </div>
                        <button className="bg- text-white p-2 rounded-md mt-4">Enviar</button>
                    </div>
                </form>
            </div>

            <Footer />
        </div>
    )
}