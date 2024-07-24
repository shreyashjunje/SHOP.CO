import React from 'react'
import { IoIosStarOutline } from "react-icons/io";



const Cart = ({cart}) => {
  return (
    <div className='w-[280px] h-[400px] gap-4 '>
        <div className='w-[300px] h-[300px] bg-[black] flex items-center justify-center'>
            <img src={cart.imageUrl} alt="" className='w-[250px] h-[250px]'/>
        </div>
        <div>
            <h2 className='font-plus-jakarta-sans font-bold text-xl'>{cart.title}</h2>
            <p>
             {cart.rating}/5.0</p>
            <p>{`$${cart.price}`}</p>
        </div>
    </div>
  )
}

export default Cart