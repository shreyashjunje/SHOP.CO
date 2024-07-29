import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import StarRating from "../components/common/StarRating";
import { product } from "../data/Product";
import SizeBtn from "../components/core/ProductDeatails/SizeBtn";
import BlackBtn from "../components/core/ProductDeatails/BlackBtn";
import ProductQuantityDiv from "../components/core/ProductDeatails/ProductQuantityDiv";
import img1 from "../assets/ProductImages/img1.png";
import img2 from "../assets/ProductImages/img2.png";
import img3 from "../assets/ProductImages/img3.png";

const ProductDetails = () => {
  return (
    <div className="mx-auto lg:mx-[5rem] flex flex-col w-11/12 max-w-maxContent justify-between gap-4 ">

      <div className="flex items-start justify-start my-4 text-lg gap-2">
        <span className="flex items-center justify-center gap-1">
          Home <MdOutlineNavigateNext className="mt-1 " />
        </span>
        <span className="flex items-center justify-center gap-1">
          Shop <MdOutlineNavigateNext className="mt-1 " />
        </span>
        <span className="flex items-center justify-center gap-1">
          Men <MdOutlineNavigateNext className="mt-1 " />
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* {image section } */}
        <div className="flex flex-col lg:flex-row gap-6 ">

          <div className="flex lg:flex-col gap-4  order-2 lg:order-1">
            <div className="bg-gray-300 w-[153px] h-[167px] relative  rounded-[20px]">
              <img
                src={img1}
                alt="this is 1st angle  of product"
                className="w-full h-full object-cover  rounded-[20px]"
              />
            </div>
            <div className="bg-gray-300  w-[153px] h-[167px] relative  rounded-[20px]">
              <img
                src={img2}
                alt="this is 2nd angle  of product"
                className="w-full h-full object-cover  rounded-[20px]"
              />
            </div>
            <div className="bg-gray-300  rounded-[20px] w-[153px] h-[167px] relative">
              <img
                src={img3}
                alt="this is 2nd angle  of product"
                className="w-full h-full object-cover  rounded-[20px]"
              />
            </div>
          </div>

          <div className="bg-gray-300 rounded-[20px] w-full lg:w-[444px] h-[530px] relative order-1 lg:order-2">
            <img
              src={img1}
              alt="this is 1st angle  of product"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>

        {/* {description details} */}
        <div className="lg:w-[50%] flex flex-col my-2">

          <div className="flex flex-col gap-3">
            <h2 className="text-5xl font-bold">{product.title}</h2>
            <StarRating rating={product.rating} />
            <div>
              <p className="text-3xl font-bold">{`$${product.price}`}</p>
            </div>
            <p className="flex flex-wrap items-center lg:w-[80%]">
              {product.description}
            </p>
          </div>

          <hr className="my-[1rem]" />

          <div className="flex flex-col gap-2 ">
            <p className="opacity-[0.6]">Select Colors</p>
            <div className="flex gap-4 ">
              {product.colors.map((color) => {
                return (
                  <div
                    className="rounded-full w-[39px] h-[39px]  border-2"
                    style={{ backgroundColor: color }}
                  ></div>
                );
              })}
            </div>
          </div>

          <hr className="my-[1rem]" />

          <div className="flex flex-col gap-4">
            <h2 className="opacity-[0.6]">Choose Size</h2>
            <div className="flex gap-2">
              {product.sizes.map((size) => {
                return <SizeBtn size={size} />;
              })}
            </div>
          </div>

          <hr className="my-[1rem]" />

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <ProductQuantityDiv quantity={product.quantity} />
            <BlackBtn text={"Add to Cart"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
