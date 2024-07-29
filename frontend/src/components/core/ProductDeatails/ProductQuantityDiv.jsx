import React from 'react'

const ProductQuantityDiv = ({quantity}) => {
  return (
    <div className="rounded-full text-xl bg-[#F0F0F0] flex items-center justify-center gap-5 px-[2rem] py-[0.8rem] w-[30%]">
        <button className='text-2xl'>-</button>
        <span >{quantity}</span>
        <button className='text-2xl'>+</button>
  </div>
  )
}

export default ProductQuantityDiv