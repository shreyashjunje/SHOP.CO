import React from "react";
import casual from "../../../assets/Images/BrowseByStyle/casual.png";
import formal from "../../../assets/Images/BrowseByStyle/formal.png";
import gym from "../../../assets/Images/BrowseByStyle/gym.png";
import party from "../../../assets/Images/BrowseByStyle/party.png";

const BrowseByDressStyle = () => {
  return (
    <div className="border-4 border-black flex  items-center  flex-col bg-[#F0F0F0] rounded-[50px] ">
      <h2>BROWSE BY dress STYLE</h2>

      <div className="flex flex-col p-12 gap-4">

        <div className="flex h-full  w-full flex-wrap overflow-hidden items-center justify-center gap-8">
          <div className="border-2 border-black object-cover rounded-[50px] overflow-hidden w-[480px] h-[300px]">
            <img src={casual} alt="" className="" />
          </div>
          <div className="border-2 border-black object-cover overflow-hidden rounded-[50px]">
            <img src={formal} alt="" className=" h-[250px] w-[480px]" />
          </div>
        </div>

        <div className="flex  overflow-hidden flex-wrap items-center justify-center mx-auto gap-8">
          <div className="border-2 border-black object-cover overflow-hidden rounded-[50px]">
            <img src={party} alt="" className=" h-[25 0px] w-[480px]" />
          </div>
          <div className="border-2 border-black  object-cover overflow-hidden rounded-[50px]">
            <img src={gym} alt="" className=" h-[300px] w-[480px]" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrowseByDressStyle;
