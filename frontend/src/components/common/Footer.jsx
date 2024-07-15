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
    <div>
        {/* section 1 */}
        <div>

            <div className='flex flex-col gap-4'>
                <img src={logoImg} alt="this is shop.co logo" />
                <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex gap-2'>
                    <AiFillTwitterCircle />
                    <FaFacebook />
                    <IoLogoInstagram />
                    <FaGithub />
                </div>
            </div>

            <div>
                {
                    FooterData.map((menus,index)=>{
                       return(
                        <div key={index}>
                            {
                                menus.map((menu,index)=>{
                                    return(
                                        <div key={index}>
                                            <h2>{menu.title}</h2>;
                                            <ul>
                                                {
                                                    (menu.links).map((list,index)=>{
                                                        return(
                                                            <li key={index}>
                                                                <Link to={list.link}>
                                                                    {list.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>

                                    )                                    
                                })
                            }
                        </div>
                       )
                    })
                }
            </div>

        </div>
        {/* section 2--only line */}
        <div></div>
        {/* section 3-right by section */}
        <div></div>
    </div>
  )
}

export default Footer