"use client";
import { useSearch } from "@/store/useSearch";
import Link from "next/link";
import React from "react";

const Header = () => {
  const { search, setSearch } = useSearch();
  return (
    <div className="py-4 px-30 flex justify-between items-center border-b border-gray-300">
      <div>
        <img className="w-37.5" src="./logo.svg" alt="" />
      </div>
      <div className="flex gap-8 items-center">
        <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-xs cursor-pointer opacity-80">
          Seller Dashboard
        </button>
        <ul className="flex gap-8 text-gray-700">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">All Product</Link>
          </li>
        </ul>
        <div className="flex gap-2 items-center border text-[14px] border-gray-300 text-gray-600 px-3 py-1 rounded-full">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="placeholder:text-gray-400  outline-0"
            placeholder="Search products"
            type="text"
          />
          <img src="./search.svg" alt="" />
        </div>
        <div className="relative">
          <img src="./basket.svg" alt="" />
          <button className="absolute -top-2 -right-3  text-xs text-white bg-primary w-4.5 h-4.5 rounded-full">
            0
          </button>
        </div>
        <button className="cursor-pointer px-8 py-2 bg-primary transition bg-primary-dull text-white rounded-full">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
