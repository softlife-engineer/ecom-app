import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => ({ cartItems: [...state.cartItems, product] })),
  removeFromCart: (id) =>
    set((state) => ({
      cartItems: state.cartItems.filter((product) => product.id !== id),
    })),
  clearCart: () => set((state) => ({ cartItems: [] })),
}));

export default useCartStore;