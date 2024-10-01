import { useShoppingCartStore } from "../../store/ShoppingCartStore";
import NavBar from "../NavBar/NavBar";
import {shallow }from "zustand/shallow"; // Asegúrate de importar shallow si lo usas

export default function ShoppingCart() {
  // Obtener los productos en el carrito desde el store
  const shoppingCart = useShoppingCartStore((state) => state.shoppingCart, shallow);

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {/* Mostrar productos en el carrito */}
            {Object.values(shoppingCart).map((product) => (
              <div key={product.id} className="group relative bg-white shadow-lg rounded-lg overflow-visible transition-transform transform hover:scale-[102%] hover:shadow-2xl cursor-pointer">
                <div className="aspect-h-1 aspect-w-1 w-full h-64 overflow-visible relative rounded-t-md bg-gray-200 group-hover:opacity-90">
                  <img
                    alt={product.alt}
                    src={product.image}
                    className="h-full w-full object-cover object-center transition-transform transform"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    <a href={product.href} className="hover:text-indigo-500 transition-colors">
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">
                    {product.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-xl font-bold text-gray-900">{product.price}</p>
                    <p className="text-sm text-gray-500">Cantidad: {product.quantity}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
