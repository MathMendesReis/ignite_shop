"use client"
import useCartState from '@/context/cart/store'
import React from 'react'
import Stripe from 'stripe'

interface Props {
product: Stripe.Product
}
export default function ButtonAddCart({product}:Props) {
  const { addToCart } = useCartState()
  return (
    <button 
    onClick={()=>addToCart(product)}
    className="flex w-[520px] justify-center items-center gap-2.5 px-8 py-5 rounded-lg  bg-[#00875f] ">
      <span className="text-[#FFF] text-lg not-italic font-bold leading-[160%] font-family: Roboto">comprar agora</span>
    </button>
  )
}
