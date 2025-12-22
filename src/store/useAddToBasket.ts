import { TProducts, TProductsResponse } from "@/app/UI/BestSellers";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  products: TProducts[];
  setProducts: (product:TProducts) => void;
};

export const useAddToCart = create<Store>()(
  persist((set) => ({
    products: [],
    setProducts: (product) =>
      set((state) => ({ products: [...state.products, product] })),
  }),
{name:"product"})
  
);