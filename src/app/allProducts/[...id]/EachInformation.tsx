"use client";
import { TProductsResponse } from "@/app/UI/BestSellers";
import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axios";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EachInformation = ({ postId }: { postId: {}[] }) => {
  const route=useRouter()
  const [mainImage, setMainImage] = useState("");
  const { data } = useQuery<TProductsResponse>({
    queryKey: ["unique"],
    queryFn: async () => {
      const { data } = await axios.get("/api/product/list");
      return data;
    },
  });
  const filter = data?.products.filter((each) => each._id === postId[1]);
  const category = data?.products.filter((c) => c.category === postId[0]);
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col pl-30 py-10 ">
        {filter?.map((one) => (
          <div key={one._id} className="flex flex-col gap-4">
            <div className="flex">
              <Link href="/">Home / </Link>
              <Link href="/allProducts">Products / </Link>
              <Link href={`/allProducts/${one.category}`}>
                {one.category} /
              </Link>
              <Link
                className="text-primary"
                href={`/allProducts/${one.category}/${one._id}`}
              >
                {one.name}
              </Link>
            </div>
            <div className="flex gap-14 ">
              <div className="flex gap-3">
                <div className="flex flex-col gap-3">
                  {one.image.map((src, index) => (
                    <div key={index} className=" border border-gray-300">
                      <img
                        className="size-24"
                        src={src}
                        onClick={() => {
                          setMainImage(src);
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className=" border border-gray-300 size-106.5">
                  <img className="" src={mainImage || one.image[0]} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-8 w-150 justify-center">
                <div className="flex flex-col gap-2">
                  <p className="text-3xl font-medium">{one.name}</p>
                  <div className="flex items-center gap-1">
                    <img className="w-3.5" src="/starpour.svg" alt="" />
                    <img className="w-3.5" src="/starpour.svg" alt="" />
                    <img className="w-3.5" src="/starpour.svg" alt="" />
                    <img className="w-3.5" src="/starpour.svg" alt="" />
                    <img className="w-3.5" src="/stargray.svg" alt="" />
                    <p className="text-sm text-gray-500/60">(4)</p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray-500/70 line-through">
                    MRP: <span>{one.offerPrice}</span>
                  </p>
                  <p className="text-2xl font-medium text-black">
                    MRP: <span>{one.price}</span>
                  </p>
                  <span className="text-gray-500/70">
                    (inclusive of all taxes)
                  </span>
                </div>
                <ul className="flex flex-col  ">
                  <p className="text-base font-medium ">About Product</p>
                  {one.description.map((description, index) => (
                    <li
                      key={index}
                      className="list-disc ml-4 text-gray-500/70 "
                    >
                      {description}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center  gap-4 text-base w-full">
                  <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition-all">
                    Add to Cart
                  </button>
                  <button className="w-full py-3.5 cursor-pointer font-medium bg-primary text-white bg-primary-dull transition-all">
                    Buy now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col py-14 px-34 gap-8">
        <p className="text-3xl text-center font-medium text-grey700">
          Relat<span className="border-b-2 border-green-500">ed Pro</span>ducts
        </p>
        <ul className="flex gap-10 items-center flex-wrap">
          {category?.map((item) => (
            <Link
              key={item._id}
              href={`/allProducts/${item.category}/${item._id}`}
            >
              <li className="flex flex-col group gap-2 p-4 border border-gray-300 rounded-lg">
                <div className="px-5 py-2">
                  <img
                    className="max-w-36 group-hover:scale-105"
                    src={item.image[0]}
                    alt=""
                  />
                </div>
                <div className="flex flex-col ">
                  <p className="text-gray-500/60 text-sm">{item.category}</p>
                  <p className="text-grey700 font-medium text-lg ">
                    {item.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <img className="w-3.5" src="/starpour.svg" alt="" />
                    <img className="w-3.5" src="/starpour.svg" alt="" />
                    <img className="w-3.5" src="/starpour.svg" alt="" />
                    <img className="w-3.5" src="/starpour.svg" alt="" />
                    <img className="w-3.5" src="/stargray.svg" alt="" />
                    <p className="text-sm text-gray-500/60">(4)</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="flex gap-1 items-center">
                      <p className="text-primary font-bold text-xl">
                        $<span>{item.price}</span>
                      </p>
                      <p className="text-sm self-end text-gray-500/60 ">
                        $<span className="line-through">{item.offerPrice}</span>
                      </p>
                    </div>
                    <div className="flex items-center cursor-pointer justify-center gap-1 bg-[#e1fee2] border border-[#4fbf8b] px-4 py-1 rounded-sm">
                      <img src="./buy.svg" alt="" />
                      <button>Add</button>
                    </div>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
          <button onClick={()=>{
          route.push("/allProducts")
          }} className="self-center hover:bg-[#e1fee2] cursor-pointer px-12  py-2.5 border-[#4fbf8b] border rounded-sm text-primary">See more</button>
      </div>
    </div>
  );
};

export default EachInformation;
