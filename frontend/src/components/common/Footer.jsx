import React from 'react'
import {FooterData} from '../../data/FooterData'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import logoImg from "../../assets/Images/SHOPCOlogo.png"
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <div className='lg:mx-24 m-4'>
        {/* section 1 */}
        <div className='flex flex-col lg:flex-row   items-center  gap-16'>

            <div className=' lg:flex flex-col items-start gap-4   lg:gap-8 lg:w-[250px] lg:h-[150px]' >
                <img src={logoImg} className='flex my-4' alt="this is shop.co logo" />
                <p className='text-sm '>We have clothes that suits your style
                     and which you’re proud to wear. From women to men.</p>
                <div className='flex gap-2'>
                    <AiFillTwitterCircle />
                    <FaFacebook />
                    <IoLogoInstagram />
                    <FaGithub />
                </div>
            </div>

            <div className='flex flex-wrap lg:flex-row gap-16 lg:gap-32 items-center justify-between mx-4  mt-2'>
               {
                  FooterData.map((menus,index)=>{
                    return(
                        <div key={index} className='flex flex-col justify-between gap-4'>   
                            <h2 className='font-semibold'>{menus.title}</h2>
                            <ul className='flex flex-col gap-4 items-start'>
                                {
                                    menus.links.map((list,subindex)=>{
                                        return(
                                            <Link key={subindex} to={list.link}>
                                                <li key={subindex}>
                                                    {list.title}
                                                </li>
                                            </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                  })
               }
            </div>

        </div>
        {/* section 2--only line */}
        <div></div>
        {/* section 3-right by section */}
        {/* <div></div> */}
    </div>
  )
}

export default Footer