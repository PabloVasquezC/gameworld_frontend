import FotoTiendaFisica from "../../assets/frontisTiendaFisica.jpg";
import FotoArticulosPokemon from "../../assets/articulosPokemon.jpg";
import FotoJoystickXbox from "../../assets/joystickXbox.jpg";
import ConsolaVintage from "../../assets/consolaVintage.avif";
import './BentoSection.css';

export default function Hero() {
  return (
    <div className="container bg-gray-800 grid grid-cols-2 gap-4 p-6">
      {/* Item 1 */}
      <div
        className="parallax"
        style={{ backgroundImage: `url(${FotoTiendaFisica})` }}
      >
      </div>
      {/* Item 2 */}
      <div
        className="parallax"
        style={{ backgroundImage: `url(${FotoArticulosPokemon})` }}
      >
      </div>
      {/* Item 3 */}
      <div
        className="parallax"
        style={{ backgroundImage: `url(${ConsolaVintage})` }}
      >
      </div>
      {/* Item 4 */}
      <div
        className="parallax"
        style={{ backgroundImage: `url(${FotoJoystickXbox})` }}
      >
      </div>
    </div>
  );
}
