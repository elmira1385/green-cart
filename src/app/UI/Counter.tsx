"use client";
import { useAddToCart } from "@/store/useAddToBasket";

const Counter = ({ id, product, count }: { id: string; product: any; count: number }) => {
  const { setProducts, clearOne } = useAddToCart();

  return (
    <div className="flex items-center gap-3 bg-green-100 border border-green-500 px-4 py-1 rounded-sm">
      <button onClick={() => clearOne(id)}>-</button>
      <span>{count}</span>
      <button onClick={() => setProducts(product)}>+</button>
    </div>
  );
};

export default Counter;