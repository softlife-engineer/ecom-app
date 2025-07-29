import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  addProduct: (newProduct) =>
    set((state) => ({ products: [...state.products, newProduct] })),
}));

export default useProductStore;
