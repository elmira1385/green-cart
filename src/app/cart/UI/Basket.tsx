"use client";

import { useAddToCart } from "@/store/useAddToBasket";
import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axios";
import React, { useEffect } from "react";
import { TProducts, TProductsResponse } from "@/app/UI/BestSellers";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Basket = () => {
  const { products, clearAll,setQty,clearOne } = useAddToCart();
  const route=useRouter()
   const totalProducts=products.reduce((sum,item)=>sum+item.qty,0)
   const totalPrice=products.reduce((sum,item)=>sum+item.price*item.qty,0)
   const tax2=totalPrice*0.02
   const totalAmount=totalPrice+tax2
  const { data, isSuccess: loginSuccess } = useQuery<TProductsResponse>({
    queryKey: ["fir"],
    queryFn: async () => {
      const { data } = await axios.get("/api/user/is-auth");
      return data;
    },
  });
  useEffect(() => {
    if (data?.success === false) {
      clearAll();
    }
  }, [loginSuccess]);
  console.log(products);
  return (
    <div className="flex px-30 py-14 justify-between">
      <div className="flex flex-col flex-1 max-w-4xl gap-4 ">
        <div className="flex gap-2">
          <p className="text-3xl font-medium ">Shopping Cart</p>
          <p className="text-sm text-primary font-semibold self-end">
            {totalProducts}
            <span> Items</span>
          </p>
        </div>
        <div className="grid grid-cols-[2fr_1fr_1fr]  w-full text-gray-500 text-base font-n ">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
        </div>
        <div className="flex flex-col gap-3">
          {loginSuccess ? (
            products.map((newProduct, index) => (
              <div
                className="grid grid-cols-[2fr_1fr_1fr] justify-between text-gray-500 items-center text-base font-medium "
                key={index}
              >
                <div className="flex gap-4">
                  <div className="border border-gray-300 rounded-lg">
                    <img className="w-24" src={newProduct.image[0]} alt="" />
                  </div>
                  <div className="flex flex-col gap-1 justify-center ">
                    <p className="font-semibold"> {newProduct.name}</p>
                    <p className="font-normal text-gray-500/70">
                      Weight: <span>N/A</span>
                    </p>
                    <div className="flex items-center font-normal text-gray-500/70">
                      <p>Qty:</p>
                      <select value={newProduct.qty} onChange={(e)=>setQty(newProduct._id,Number(e.target.value))} className="outline-none">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p>
                    $ <span>{newProduct.price*(newProduct.qty||1)}</span>
                  </p>
                </div>
                <div onClick={()=>{
                  clearOne(newProduct._id)
                }} className="flex justify-center items-center">
                  <Image src="/Xsvg.svg" alt="minus" width={24} height={24} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-500">you should login or register </p>
          )}
        </div>
        <button onClick={()=>{
           route.push("./allProducts")
        }} className="group cursor-pointer flex items-center  gap-2 text-primary font-medium">
          <Image className="group-hover:-translate-x-1 transition-all" src="/continuse.svg"
          alt="flash"
          width={14}
          height={14}/>
          Continue Shopping
        </button>
      </div>
      <div className="max-w-90 w-full bg-gray-100 p-5 ">
        <p className="text-2xl font-medium">Order Summary</p>
        <hr className="border-gray-300 my-6"></hr>
        <div className="flex flex-col ">
          <p className="text-base font-medium uppercase">Delivery Address</p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-gray-500">No address found</p>
            <button className="text-primary hover:underline cursor-pointer">
              Change
            </button>
          </div>
          <p className="text-base font-medium uppercase pt-6">Payment Method</p>
          <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
            <option value="COD">Cash On Delivery</option>
            <option value="Online">Online Payment</option>
          </select>
        </div>
        <hr className="border-gray-300 my-6"></hr>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-gray-500">
            <p>Price</p>
            <p>
              $<span>{totalPrice}</span>
            </p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Shipping Fee</p>
            <p className="text-primary">free</p>
          </div>
          <div className="flex justify-between text-gray-500">
            <p>Tax (2%)</p>
            <p>
              $<span>{tax2}</span>
            </p>
          </div>
          <div className="flex justify-between text-lg text-gray-600">
            <p>Total Amount:</p>
            <p>
              $<span>{totalAmount}</span>
            </p>
          </div>
        </div>
        <button className="w-full py-3 mt-6 cursor-pointer bg-primary text-white font-medium bg-primary-dull transition-all">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Basket;
