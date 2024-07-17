import React from "react";
import homebg from "../assets/Images/home-bg.png";
import Navbar from "../components/common/Navbar";
import modelsImg from "../assets/Images/modelsImg.jpeg";
import vectorImg from "../assets/Images/Vector.png";

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
    <div>
      <div className="flex bg-[#F2F0F1] justify-between">
        {/* first div  */}
        <div>
          <div>
            <h2>FIND CLOTHES THAT MATCH YOUR STYLE</h2>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button>Shop Now</button>
          </div>

          <div>
            {countArr.map((count, index) => {
              return (
                <div key={index}>
                  {count.count}
                  {count.title}
                </div>
              );
            })}
          </div>
        </div>

        {/* second div */}
        <div className="flex relative h-screen">
          <img
            src={vectorImg}
            className="absolute z-10 top-72 left-36 w-14 h-14"
            alt="this is small vector"
          />

          <div className="relative z-10 w-full h-screen ">
            <img
              src={modelsImg}
              className=" absolute top-0 h-[670px]  w-[1440px] object-cover object-top"
              alt="this is models image"
            />
          </div>

          <img
            src={vectorImg}
            className=" absolute  top-16 right-28 w-28 h-28"
            alt="this is big vector"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
