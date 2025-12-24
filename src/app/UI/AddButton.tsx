"use client";
import { useAddToCart } from "@/store/useAddToBasket";

const AddButton = ({ product }: { product: any }) => {
  const { setProducts } = useAddToCart();

  return (
    <button
      onClick={() => setProducts(product)}
      className="bg-green-100 border border-green-500 px-4 py-1 rounded-sm"
    >
      Add
    </button>
  );
};

export default AddButton;