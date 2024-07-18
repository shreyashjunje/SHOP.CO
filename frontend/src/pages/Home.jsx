import React from "react";
import homebg from "../assets/Images/home-bg.png";
import Navbar from "../components/common/Navbar";
import modelsImg from "../assets/Images/modelsImg.jpeg";
import vectorImg from "../assets/Images/Vector.png";
import versace from "../assets/Images/Group.png";
import zara from "../assets/Images/Zara.png";
import gucci from "../assets/Images/gucci.png";
import prada from "../assets/Images/prada.png";
import calvinklein from "../assets/Images/Calvin.png";
import OffersBox from "../components/common/OffersBox";

const countArr = [
  {
    count: "200+",
    title: "Internationals Brands",
  },
  {
    count: "2,000+",
    title: "High-Quality Products",
  },
  {
    count: "30,000+",
    title: "Happy Customers",
  },
];

const Home = () => {
  return (
    <div className=" relative w-full flex-col">
      <Navbar className="absolute" />

      <div className="flex flex-col lg:flex-row bg-[#F2F0F1] justify-between ">
        {/* first div  */}
        <div className="flex flex-wrap  lg:flex-col lg:mx-20  gap-6 mt-8 mx-4 lg:mt-20 lg:ml-24 lg:items-center ">
          <div className="flex flex-col items-center  lg:items-start lg:w-[577px] gap-6 lg:gap-4">
            <h2 className="font-bebas-neue font-bold tracking-wide text-7xl">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h2>
            <p className="font-plus-jakarta-sans py-2">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-black text-white w-full lg:w-[210px] h-[52px] text-center rounded-full ">
              Shop Now
            </button>
          </div>

          <div className="flex  lg:flex-row ">
            {countArr.map((count, index) => {
              return (
                <div
                  className="flex flex-col border-r-2 border-black border-opacity-0.4  lg:px-4 lg:mr-4"
                  key={index}
                >
                  <h2 className="text-4xl font-bold py-2">{count.count}</h2>
                  <p>{count.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* second div */}
        <div className="flex relative ml-0">
          <img
            src={vectorImg}
            className="absolute z-10 top-72 left-28 w-14 h-14"
            alt="this is small vector"
          />

          <img
            src={modelsImg}
            className="relative  top-0 h-[650px]  w-[1440px] object-cover object-top"
            alt="this is models image"
          />

          <img
            src={vectorImg}
            className=" absolute  top-16 right-28 w-28 h-28"
            alt="this is big vector"
          />
        </div>
      </div>

      <div className="bg-black py-12">
        <div className="flex flex-wrap lg:flex-row justify-center items-center gap-8 lg:gap-28">
          <img src={versace} alt="this is image of brand name" />
          <img src={zara} alt="this is image of brand name" />
          <img src={gucci} alt="this is image of brand name" />
          <img src={prada} alt="this is image of brand name" />
          <img src={calvinklein} alt="this is image of brand name" />
        </div>
      </div>

      <OffersBox />
    </div>
  );
};

export default Home;
