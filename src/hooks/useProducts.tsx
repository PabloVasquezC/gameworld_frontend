import { useState, useEffect } from "react";
import { getProducts } from "../services/prouctService"; // Importamos la función del servicio

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Llamamos al servicio
        setProducts(data); // Guardamos los productos en el estado
      } catch (error) {
        setError(error.message); // Guardamos el mensaje de error en el estado
      } finally {
        setLoading(false); // Quitamos el estado de carga
      }
    };

    fetchProducts();
  }, []);

  return { products, error, loading }; // Retornamos el estado para que el componente lo use
}