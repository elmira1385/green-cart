import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="flex flex-col gap-6 px-32 pt-6">
      <p className="text-3xl font-medium text-grey700">Categories</p>
      <div className="flex gap-4 justify-between">
        <Link href="./allProducts/organic_vegtable">
          <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#fef6da]">
            <img
              className="max-w-28 group-hover:scale-105 transition"
              src="./vagtable.png"
              alt=""
            />
            <p className="text-sm font-medium text-grey700">Organic veggies</p>
          </div>
        </Link>
        <Link href="./allProducts/fresh_fruits">
          <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#fee0e0]">
            <img
              className="max-w-28 group-hover:scale-105 transition"
              src="./fruit.png"
              alt=""
            />
            <p className="text-sm font-medium text-grey700">Fresh Fruits</p>
          </div>
        </Link>
        <Link href="./allProducts/cold_drinks">
          <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#f0f5de]">
            <img
              className="max-w-28 group-hover:scale-105 transition"
              src="./drinks.png"
              alt=""
            />
            <p className="text-sm font-medium text-grey700">Cold Drinks</p>
          </div>
        </Link>
        <Link href="./allProducts/instant_food">
          <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#e1f5ec]">
            <img
              className="max-w-28 group-hover:scale-105 transition"
              src="./instant.png"
              alt=""
            />
            <p className="text-sm font-medium text-grey700">Instant Food</p>
          </div>
        </Link>
        <Link href="./allProducts/dairy_products">
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#fee6cd]">
          <img
            className="max-w-28 group-hover:scale-105 transition"
            src="./dairy.png"
            alt=""
          />
          <p className="text-sm font-medium text-grey700">Dairy Products</p>
        </div></Link>
        <Link href="./allProducts/bakery_breads">
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#e0f6fe]">
          <img
            className="max-w-28 group-hover:scale-105 transition"
            src="./bakery.png"
            alt=""
          />
          <p className="text-sm font-medium text-grey700">Bakery & Breads</p>
        </div></Link>
        <Link href="./allProducts/grains_cereals">
        <div className="group cursor-pointer py-5 px-6 gap-2 rounded-lg flex flex-col justify-center items-center bg-[#f1e3f9]">
          <img
            className="max-w-28 group-hover:scale-105 transition"
            src="./grains.png"
            alt=""
          />
          <p className="text-sm font-medium text-grey700">Grains & Cereals</p>
        </div></Link>
      </div>
    </div>
  );
};

export default Categories;
