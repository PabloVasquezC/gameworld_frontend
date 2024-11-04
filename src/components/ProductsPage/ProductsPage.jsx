import  useProducts  from "../../hooks/useProducts";
import NavBar from "../NavBar/NavBar";
import ProductCard from "./ProductCard/ProductCard";
import './ProductsPage.css';
import LoadingSpinner from "../Spinner/Spinner";

export default function ProductsPage() {
  const { products, error, loading } = useProducts(); 

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          {/* Mostrar indicador de carga */}
          {loading ? <LoadingSpinner /> : null}

          {/* Mostrar mensaje de error si ocurre */}
          {error && <p className="text-red-500">{error}</p>}

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {console.log('mostrando productos en Product page', products)}
        </div>
      </div>
    </>
  );
}
