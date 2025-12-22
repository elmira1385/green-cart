"use client"
import { useAddToCart } from '@/store/useAddToBasket'
import React from 'react'

const Basket = () => {
    const{products}=useAddToCart()
    console.log(products)
  return (
    <div>Basket</div>
  )
}

export default Basket