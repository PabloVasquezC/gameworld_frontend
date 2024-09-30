import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import ProductCard from "../ProductCard/ProductCard";
import './ProductsPage.css';

export default function ProductsPage() {
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/productsPage/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const products = await response.json();
        // console.log(products);
        setProducts(products); 
        setLoading(false); // Termina la carga cuando se obtienen los datos
      } else {
        const errorProduct = await response.json();
        setError(errorProduct.error);
        setLoading(false); // Termina la carga cuando ocurre un error
        console.error(errorProduct.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching products');
      setLoading(false); // Termina la carga cuando ocurre un error
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          {/* Mostrar indicador de carga */}
          {loading && <p>Loading products...</p>}

          {/* Mostrar mensaje de error si ocurre */}
          {error && <p className="text-red-500">{error}</p>}

          
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
          
        </div>
      </div>
    </>
  );
}
