import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para controlar si la descripción está desplegada

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div key={product.id} className="group relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer">
      {/* Imagen del producto */}
      <div className="aspect-h-1 aspect-w-1 w-full h-64 overflow-hidden rounded-t-md bg-gray-200 group-hover:opacity-90">
        <img
          alt={product.alt}
          src={product.image}
          className="h-full w-full object-cover object-center transition-transform transform group-hover:scale-110"
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
    </div>
  );
}
