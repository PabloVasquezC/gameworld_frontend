/* eslint-disable react/prop-types */
import './ProductModal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function ProductModal({ product, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button bg-red-500 rounded-[50%] px-2" onClick={onClose}>X</button>
        <h2 className='text-center text-2xl font-semibold'>{product.name}</h2>
        <hr className='my-2 '/>
        <img src={product.image}alt="imagen-del-producto" />
        <hr className='my-2 '/>
        <p>{product.description}</p>
        <hr className='my-2 '/>
        <div className='flex justify-around items-center'>
            <p>Precio: {product.price}</p>
            <FontAwesomeIcon 
                icon={faCartPlus} 
                // onClick={handleAddToCart} 
                className="user-icon text-white cursor-pointer shadow-black shadow-sm hover:shadow-lg z-20 h-8 w-1/2 bg-green-500 py-1 rounded border border-green-700" 
            />
        </div>
      </div>
    </div>
  );
}
