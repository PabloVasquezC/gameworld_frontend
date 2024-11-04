import FotoTiendaFisica from "../../assets/frontisTiendaFisica.jpg";
import FotoArticulosPokemon from "../../assets/articulosPokemon.jpg";
import FotoJoystickXbox from "../../assets/joystickXbox.jpg";
import ConsolaVintage from "../../assets/consolaVintage.avif";
import './BentoSection.css'

export default function Hero() {
  return (
    <div className="container h-[100vh] bg-gray-800 grid grid-cols-2 gap-4 p-6 ">
      {/* Item 1 */}
      <img 
        src={FotoTiendaFisica} 
        className="object-cover bg-pink-500 h-[300px] rounded-lg flex items-center justify-center text-white text-2xl">
      </img>
      {/* Item 2 */}
      <img
        src={FotoArticulosPokemon}
        className="bg-blue-500 h-[300px] rounded-lg flex items-center justify-center text-white text-2xl">
      </img>
      {/* Item 3 */}
      <img
        src={ConsolaVintage}
        className="bg-blue-500 h-[300px] rounded-lg flex items-center justify-center text-white text-2xl">
      </img>
      {/* Item 4 */}
      <img
        src={FotoJoystickXbox}
        className="bg-yellow-500 h-[300px] rounded-lg flex items-center justify-center text-white text-2xl">
      </img>
      
    </div>
  );
}
