import React, { useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";


const OffersBox = () => {

    const [offerbox,setOfferbox]=useState("");

    function offerboxHandler(event){
        setOfferbox(event.target.value);

    }

    function submitHandler(event){
        event.preventDefault();
        console.log(offerbox)
    }



  return (
    <div className=' flex justify-center items-center m-2 '>

        <div className='bg-black flex flex-col lg:flex-row justify-between  items-center px-12 lg:px-20 py-8 gap-4 rounded-3xl w-[1240px] '>
            <div className=''>
                <h2 className='text-white font-bebas-neue text-5xl'>STAY UPTO DATE ABOUT <br/>OUR LATEST OFFERS</h2>
            </div>

            <div className='flex flex-col gap-4 '>
                <div className='flex items-center rounded-full py-3 px-4  gap-4 text-center bg-white overflow-hidden'>
                 <MdOutlineEmail />
                 <input 
                 type="email"
                 placeholder='Enter your email address'
                 name="email"
                 className='focus:outline-none w-full text-lg'
                 
                 onChange={offerboxHandler}
                  />
                </div>
                <div className='rounded-full bg-white pointer  py-3 px-8 w-[350px]' onClick={submitHandler} >
                    <h2 className='text-center tracking-wider font-semibold'>Subscribe to Newsletter</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OffersBox