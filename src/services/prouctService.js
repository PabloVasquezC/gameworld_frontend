export async function getProducts() {
    try {
        const response = await fetch('https://gameworld-7b4d96ab41b1.herokuapp.com/api/productsPage/', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to load products.');
        }

        return response.json(); // Retornamos los datos en formato JSON si todo salió bien
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Propagamos el error para que pueda ser manejado en el componente
    }
}
