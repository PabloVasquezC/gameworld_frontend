import { create } from 'zustand';

export const useShoppingCartStore = create((set) => ({
  shoppingCart: {},
  addProduct: (product) => set((state) => {
    const newShoppingCart = { ...state.shoppingCart };
    
    if (newShoppingCart[product.id]) {
      newShoppingCart[product.id].quantity += 1;
    } else {
      newShoppingCart[product.id] = { ...product, quantity: 1 };
    }

    return { shoppingCart: newShoppingCart };
  }),
  removeProduct: (productId) => set((state) => {
    const newShoppingCart = { ...state.shoppingCart };
    delete newShoppingCart[productId];
    return { shoppingCart: newShoppingCart };
  }),
}));
