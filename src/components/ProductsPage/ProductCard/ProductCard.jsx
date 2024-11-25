/* eslint-disable react/prop-types */
import { useShoppingCartStore } from "../../../store/ShoppingCartStore";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";



export default function ProductCard( {product , onClick} ) {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [stock, setStock] = useState(product.stock);

  const decrementStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  }

  const addProductToCart = useShoppingCartStore((state) => state.addProduct);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  const showDataRecived = () => {
    console.log('productos recibidos', product);
  };

  showDataRecived();

  const handleAddToCart = () => {
    decrementStock();
    addProductToCart(product);
    setIsModalVisible(true);
    
    if (stock > 0) {
      setTimeout(() => {
        setIsModalVisible(false);
      }, 2000);
    } else {
      setIsModalVisible(false);
    }
    
  };

  return (
    
    <div 
      onClick={onClick}
      key={product.id} 
      className="group relative bg-gray-800 shadow-lg rounded-lg overflow-visible transition-transform transform hover:scale-[102%] hover:shadow-2xl cursor-pointer">
      
      {/* Imagen del producto */}
      <div className="aspect-h-1 aspect-w-1 w-full h-64 overflow-visible relative rounded-t-md  group-hover:opacity-90">
        <img
          alt={product.alt}
          src={product.image}
          className="h-full w-full object-cover object-center transition-transform transform"
        />
      </div>

      {/* Información del producto */}
      <div className="p-4 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-indigo-500">
          <a href={product.href} className="transition-colors">
            {product.name}
          </a>
        </h3>

        <p className={`mt-2 text-gray-300 text-sm transition-all duration-300 ${isExpanded ? '' : 'truncate'}`}>
          {product.description}
        </p>

        <p className={`mt-2 text-gray-300 text-sm transition-all duration-300 ${isExpanded ? '' : 'truncate'}`}>
          categoria: {product.category.name}
        </p>

        <span className="mt-2 text-gray-300 text-sm">
          stock disponible: <span className="font-bold">{stock}</span>
        </span>

        <button
          onClick={toggleDescription}
          className="mt-2 text-blue-500 text-sm focus:outline-none hover:underline"
        >
          {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
        </button>

        

        <div>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">{product.price} CLP.</p>
        </div>
      </div>
      <FontAwesomeIcon 
          icon={faCartPlus} 
          onClick={handleAddToCart} 
          className="user-icon text-white cursor-pointer shadow-black shadow-sm hover:shadow-lg z-20 h-8 w-full bg-green-500 py-1 rounded border border-green-700 -translate-y-5" 
        />

        </div>
      {isModalVisible && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded shadow-lg z-30">
          ¡Producto añadido al carrito!
        </div>
      )}

      
    </div>
  );
}
