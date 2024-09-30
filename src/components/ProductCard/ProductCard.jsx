import { useState } from 'react';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // Estado para el modal

  // Función para alternar la descripción
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  // Función para mostrar el modal
  const handleAddToCart = () => {
    console.log(product)
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 2000); // El modal desaparecerá después de 2 segundos
  };

  return (
    <div key={product.id} className="group relative bg-white shadow-lg rounded-lg overflow-visible transition-transform transform hover:scale-[102%] hover:shadow-2xl cursor-pointer">
      
      {/* Imagen del producto */}
      <div className="aspect-h-1 aspect-w-1 w-full h-64 overflow-visible relative rounded-t-md bg-gray-200 group-hover:opacity-90">
        <FontAwesomeIcon 
          icon={faCartPlus} 
          onClick={handleAddToCart} // Llamar a la función que muestra el modal
          className="user-icon mx-3 text-white cursor-pointer shadow-black shadow-sm hover:shadow-lg z-20 h-8 w-auto bg-green-500 p-2 rounded border border-green-700 translate-x-60 -translate-y-5" 
        />
        <img
          alt={product.alt}
          src={product.image}
          className="h-full w-full object-cover object-center transition-transform transform"
        />
      </div>

      {/* Información del producto */}
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          <a href={product.href} className="hover:text-indigo-500 transition-colors">
            {product.name}
          </a>
        </h3>

        {/* Descripción del producto */}
        <p className={`mt-2 text-gray-600 text-sm transition-all duration-300 ${isExpanded ? '' : 'truncate'}`}>
          {product.description}
        </p>

        {/* Botón para expandir/contraer la descripción */}
        <button
          onClick={toggleDescription}
          className="mt-2 text-indigo-500 text-sm focus:outline-none hover:underline"
        >
          {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
        </button>

        {/* Precio */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">{product.price}</p>
        </div>
      </div>

      {/* Modal de confirmación de agregado al carrito */}
      {isModalVisible && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded shadow-lg z-30">
          ¡Producto añadido al carrito!
        </div>
      )}
    </div>
  );
}
