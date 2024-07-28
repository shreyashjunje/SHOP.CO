import React from "react";
import { MdDelete } from "react-icons/md";
import { CartArray } from "../../../data/CartArray";
import { useState } from "react";

const Card = ({ cart }) => {
  const [productCount, setProductCount] = useState([CartArray]);

  const increaseHandler = ({ id }) => {
    setProductCount((prevCart) => {
      prevCart.map((item) => {
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      });
    });
  };

  const decreaseHandler = (id) => {
    setProductCount((prevCart) => {
      prevCart.map((item) => {
        item.id === id && item.quantity > 1
          ? { ...item, quantity: quantity - 1 }
          : item;
      });
    });
  };

  return (
    <div className="flex object-cover w-[80%] lg:w-[667px] lg:h-[124px] m-2 gap-4 ">

      <div className=" bg-gray-300  overflow-hidden">
        <img src={cart.image} alt={`this is an image of ${cart.title}`} className="w-[124px] h-[124px]" />
      </div>

      <div className="flex justify-between lg:w-[80%] ">
        <div className="">
          <h2 className="text-xl font-bold">{cart.title}</h2>
          <p >{`Size : ${cart.size}`}</p>
          <p>{`Color : ${cart.color}`}</p>
          <p className="text-xl font-bold mt-3">{`$${cart.price}`}</p>
        </div>

        <div className="flex flex-col justify-between items-end m-1">
          <MdDelete className="text-red-500 text-2xl"/>
          <div className="rounded-full bg-[#F0F0F0] flex items-center justify-center gap-5 py-[0.2rem] px-[0.6rem]">
            <button onClick={() => decreaseHandler(cart.id)}>-</button>
            <span>{cart.quantity}</span>
            <button onClick={() => increaseHandler(cart.id)}>+</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
