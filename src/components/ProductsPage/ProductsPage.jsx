import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import NavBar from "../NavBar/NavBar";
import ProductCard from "./ProductCard/ProductCard";
import './ProductsPage.css';
import LoadingSpinner from "../Spinner/Spinner";
import ProductModal from "./ProductModal/ProductModal"; 

export default function ProductsPage() {
  const { products, error, loading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <NavBar />
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
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          {/* Mostrar indicador de carga */}
          {loading ? <LoadingSpinner /> : null}

          {/* Mostrar mensaje de error si ocurre */}
          {error && <p className="text-red-500">{error}</p>}

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => openModal(product)} />
            ))}
          </div>
          {console.log('mostrando productos en Product page', products)}
        </div>
      </div>

      {/* Modal para mostrar detalles del producto */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </>
  );
}
