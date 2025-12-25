"use client";
import { useIsLogin } from "@/store/useIsLogin";
import { useModule } from "@/store/useModule";
import { useSearch } from "@/store/useSearch";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import IFIsLogin from "./IFIsLogin";
import { useAddToCart } from "@/store/useAddToBasket";


const Header = () => {
  const {products}=useAddToCart()
  const router = useRouter();
  const { search, setSearch } = useSearch();
  const {  setIsOpen } = useModule();
  const{IsLogin}=useIsLogin()
  const totalProducts=products.reduce((sum,item)=>sum+item.qty,0)
  return (
    <div className="py-4 px-32 flex justify-between items-center border-b border-gray-300">
      <div>
        <img className="w-37.5" src="./logo.svg" alt="" />
      </div>
      <div className="flex gap-8 items-center">
        <ul className="flex gap-8 text-grey700">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="./allProducts">All Product</Link>
          </li>
        </ul>
        <div className="flex gap-2 items-center border text-[14px] border-gray-300 text-gray-600 px-3 py-1 rounded-full">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              if (search.length > 0) {
                router.push("/allProducts");
              }
            }}
            className="placeholder:text-gray-400  outline-0"
            placeholder="Search products"
            type="text"
          />
          <img src="./search.svg" alt="" />
        </div>
        <Link href="/cart">
          <div className="relative cursor-pointer">
            <img src="./basket.svg" alt="" />
            <button className="absolute -top-2 -right-3  text-xs text-white bg-primary w-4.5 h-4.5 rounded-full">
              {totalProducts}
            </button>
          </div>
        </Link>

        {IsLogin ? (
          <IFIsLogin />
        ) : (
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="cursor-pointer px-8 py-2 bg-primary transition bg-primary-dull text-white rounded-full"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
