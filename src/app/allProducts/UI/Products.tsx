"use client"
import { TProductsResponse } from '@/app/UI/BestSellers'
import { useQuery } from '@tanstack/react-query'
import axios from '@/api/axios'
import React from 'react'
import { useSearch } from '@/store/useSearch'

const Products = () => {
    const{search}=useSearch()
    const{data}=useQuery<TProductsResponse>({
        queryKey:["allProducts"],
        queryFn:async()=>{
         const {data}=await axios.get("/api/product/list")
         return data
         }
    })
  return (
    <div className="flex flex-col gap-6 px-32 py-20">
      <p className="text-2xl font-medium text-grey700">All PROU<span className='border-b-2 border-green-500'>UCTS</span></p>
      <ul className="flex gap-10 items-center flex-wrap">
        {data?.products.filter((product)=>(product.name.toLocaleLowerCase().includes(search))).map((item)=>(
        <li key={item._id} className="flex flex-col group gap-2 p-4 border border-gray-300 rounded-lg">
          <div className="px-5 py-2">
            <img className="max-w-36 group-hover:scale-105" src={item.image[0]} alt="" />
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-500/60 text-sm">{item.category}</p>
            <p className="text-grey700 font-medium text-lg ">
              {item.name}
            </p>
            <div className="flex items-center gap-1">
              <img className="w-3.5" src="./starpour.svg" alt="" />
              <img className="w-3.5" src="./starpour.svg" alt="" />
              <img className="w-3.5" src="./starpour.svg" alt="" />
              <img className="w-3.5" src="./starpour.svg" alt="" />
              <img className="w-3.5" src="./stargray.svg" alt="" />
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
              <button >
                Add
              </button>
              </div>
            </div>
          </div>
        </li>
        ))}
        
      </ul>
    </div>
  )
}

export default Products