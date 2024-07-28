import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import { CartArray } from '../data/CartArray';
import Card from '../components/core/Cart/Card';
import { MdOutlineLocalOffer } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";




const Cart = () => {
  return (
    <div className='mx-auto lg:mx-[5rem] flex flex-col w-11/12 max-w-maxContent justify-between gap-4 '>

        <div className='flex items-start justify-start gap-2 my-3 ml-1'>
            <span className='flex items-center justify-center'>Home <MdOutlineNavigateNext className='mt-1 '/></span>
            <span>Cart</span>
        </div>

        <div className='flex flex-col'>
            <h2 className='text-4xl font-bold '>YOUR CART</h2>

            <div className='flex flex-col lg:flex-row lg:gap-24 items-center lg:items-start justify-start'>

                <div className='flex flex-col gap-6 rounded-2xl my-2 w-[90%] lg:w-[715px] border-2 p-4'>
                    {
                        CartArray.map((cart,index)=>{
                            return (
                                
                                <Card cart={cart} key={cart.id}/>
                        


                                
                            )
                        })
                    }
                </div>

                <div className='w-[450px] h-[420px] border-2 flex flex-col gap-6 my-4 rounded-2xl  py-[0.8rem] px-[1rem]' >
                    <h2 className='text-lg font-bold'>Order Summary</h2>

                    <div className='flex flex-col gap-2'>

                        <div className='flex items-center justify-between'>
                            <p className='text-lg'>Subtotal</p>
                            <p className='font-bold text-lg'>$0</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-lg'>Discount</p>
                            <p className='font-bold text-lg'>$0</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-lg'>Delivery Fee</p>
                            <p className='font-bold text-lg'>$0</p>
                        </div>
                        <hr className="my-[1rem]" />

                        <div className='flex items-center justify-between'>
                            <p className='text-lg'>Total</p>
                            <p className='font-bold text-lg'>$0</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-2'>

                        <div className='w-full flex items-center gap-2 bg-[#F0F0F0] px-[1.5rem] py-[0.8rem] rounded-full '>
                          <MdOutlineLocalOffer className='text-lg'/>
                          <input type="text" placeholder='Add Promo Code'className=' focus:outline-none bg-[#F0F0F0] w-full'/>

                        </div>

                        <div  className='px-[2rem] py-[0.8rem]  text-white bg-black rounded-full'>
                            Apply
                        </div>
                    </div>

                    <div className='mx-auto flex items-center gap-2 justify-center w-full bg-black text-white px-[1.5rem] py-[0.8rem] rounded-full'>
                        <p>Go to Checkout</p>
                        <FaArrowRight />
                    </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Cart