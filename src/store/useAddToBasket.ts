
import { TProducts, TProductsResponse } from "@/app/UI/BestSellers";
import { profile } from "console";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  products: CartProduct[];
  setProducts: (product:TProducts) => void;
  clearAll:()=>void,
  clearOne:(id:string)=>void,
  setQty:(id:string,qty:number)=>void
};

type CartProduct=TProducts&{
  qty:number
}

export const useAddToCart = create<Store>()(
  persist(
    (set) => ({
      products: [],
      setProducts: (product) =>
        set((state) => {
          //if there are or no
          const exists = state.products.find((p) => p._id === product._id);

       //if there are some products add to qty 
          if (exists) {
            return {
              products: state.products.map((p) =>
                p._id === product._id
                  ? { ...p, qty: (p.qty || 1) + 1 }
                  : p
              ),
            };
          }
           //if there are no products save defult value and qty=1
          return {
            products: [...state.products, { ...product, qty: 1 }],
          };
        }),

      clearOne: (id) =>
        set((state) => {
          //find product in the basket
          const item = state.products.find((p) => p._id === id);
          //if there are not any products show previuos value
          if (!item) return state;
           //how many products are there in the basket
          const currentQty = item.qty || 1;

          if (currentQty > 1) {
            return {
              products: state.products.map((p) =>
                p._id === id ? { ...p, qty: currentQty - 1 } : p
              ),
            };
          }
        //if there is one product delete all of them 
        //save one of them becuese defult value ===1
          return {
            products: state.products.filter((p) => p._id !== id),
          };
        }),

    
      clearAll: () => set({ products: [] }),

     //this is for select
      setQty: (id, qty) =>
        set((state) => ({
          products: state.products.map((p) =>
            p._id === id ? { ...p, qty } : p
          ),
        })),
    }),
    { name: "product" }
  )
);