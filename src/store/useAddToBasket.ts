import { TProducts, TProductsResponse } from "@/app/UI/BestSellers";
import { profile } from "console";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  products: TProducts[];
  setProducts: (product:TProducts) => void;
  clearAll:()=>void,
  clearOne:(id:string)=>void,
};

export const useAddToCart = create<Store>()(
  
  persist((set) => ({
    products: [],
    setProducts: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    clearAll:()=>set({products:[]}),
    clearOne:(id)=>set((previous)=>({products:previous.products.filter((each)=>each._id !==id)})),
  }),
{name:"product"})
  
);