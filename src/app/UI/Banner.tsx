"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const Banner = () => {
  const router=useRouter()
  return (
    <div className='flex justify-center items-center px-32 pt-10'>
      <div className='bg-[url(/baner.png)] w-full rounded-lg  bg-cover bg-center flex items-center p-24'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-4 '>
          <p className=' text-5xl font-bold text-grey700'>
          Freshness You Can  
        </p>
          <p className=' text-5xl font-bold text-grey700'>
          Trust, Savings You
        </p>
          <p className=' text-5xl font-bold text-grey700'>
          will Love!
        </p>
        </div>
        <div className='flex '>
          <button onClick={()=>{
            router.push("/allProducts")
          }} className='py-3 px-8 rounded-sm bg-primary transition-all cursor-pointer bg-primary-dull text-white font-semibold'>Shop now</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner