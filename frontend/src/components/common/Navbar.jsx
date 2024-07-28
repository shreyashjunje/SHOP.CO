import React, { useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import NavLinks from "../../data/Navlinks";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useLocation, matchPath } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io"
import logo from "../../assets/Images/SHOPCOlogo.png"
import { VscThreeBars } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";




const Navbar = () => {
  const navigate=useNavigate();
  const location = useLocation();

  const[searchbar,setSearchbar]=useState("")

  function searchHandler(){
    setSearchbar(()=>{
    
    })
  }

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="flex justify-center items-center top-[62px] left-[100px] border-b-2">
      <div className=" w-11/12 max-w-content mt-[1.5rem] mx-[2rem] mb-6 flex items-center justify-between lg:justify-evenly gap-10 ">



        <div className="flex gap-2">
             {/* for small screen navlinks */}
            <VscThreeBars className="lg:hidden w-6 h-6 m-0"/>


            {/* logo */}
            <Link to="/">
            <div>
                {/* <h1 className="font-integral text-2xl text-left font-bold">
                SHOP.CO
                </h1> */}
                <img src={logo} className=""  alt="this is shop.co logo" />
            </div>
            </Link>
        </div>
       

        {/* navlinks */}
        <div className=" hidden sm:flex">
          <ul className=" flex gap-5">
            {NavLinks.map((link, index) => {
              return (
                <li key={index} className="text-xl">
                  {link.title === "Shop" ? (
                    <div className="flex justify-center items-center">
                      <p>Shop </p>
                      <MdOutlineKeyboardArrowDown />
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link.path) ? "text-blue-600" : "text-black"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* search section */}
        <div className=" hidden lg:flex items-center  py-3 px-4 gap-3 rounded-full border-2 lg:w-[580px]">
            <IoIosSearch className="w-6 h-6"/>
            <input
            className="w-[80%]  focus:outline-none"
            type="text"
            name="searchbar"
            placeholder="Search for Products"
            onChange={searchHandler}
            value={searchbar}
             />
        </div>



        {/* login section and cart section */}
        <div className="flex gap-5">
            {/* for small screen search icon will appear */}
            <IoIosSearch className="lg:hidden flex items-center w-6 h-6"/>

            <FiShoppingCart onClick={()=>{
              navigate("/cart")
            }} className="w-6 h-6"/>
            <FaRegUserCircle className="w-6 h-6"/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
