import FotoTiendaFisica from "../../assets/frontisTiendaFisica.jpg";
import FotoArticulosPokemon from "../../assets/articulosPokemon.jpg";
import FotoJoystickXbox from "../../assets/joystickXbox.jpg";

export default function Hero() {
  return (
    <div className="h-[100vh] w-[100%] bg-gray-800 grid grid-cols-2 gap-4 p-4 mx-auto">
      {/* Item 1 */}
      <img 
        src={FotoTiendaFisica} 
        className="object-cover bg-pink-500 h-full rounded-lg flex items-center justify-center text-white text-2xl">
        
      </img>
      {/* Item 2 */}
      <img
        src={FotoArticulosPokemon}
        className="bg-blue-500 h-full rounded-lg flex items-center justify-center text-white text-2xl">
        
      </img>
      {/* Item 3 */}
      <div className="bg-green-500 h-full rounded-lg flex items-center justify-center text-white text-2xl">
        Item 3
      </div>
      {/* Item 4 */}
      <img
        src={FotoJoystickXbox}
        className="bg-yellow-500 h-full rounded-lg flex items-center justify-center text-white text-2xl">
  
      </img>
      {/* Item 5 */}
      <div className="bg-purple-500 h-full rounded-lg flex items-center justify-center text-white text-2xl">
        Item 5
      </div>
      {/* Item 6 */}
      <div className="bg-orange-500 h-full rounded-lg flex items-center justify-center text-white text-2xl">
        Item 6
      </div>
    </div>
  );
}
