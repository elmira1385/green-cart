"use client"
import React from 'react'


const Banner = () => {
  return (
    <div className='flex justify-center items-center px-32'>
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
          <button className='py-3 px-8 rounded-sm bg-primary transition-all cursor-pointer bg-primary-dull text-white font-semibold'>Shop now</button>
          <div className='flex gap-2 py-3 px-8  transition-all cursor-pointer items-center group'>
            <button className=' text-grey700 '>Explore deals</button>
            <img className='group-hover:translate-x-2 transition-all' src="./flash.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner