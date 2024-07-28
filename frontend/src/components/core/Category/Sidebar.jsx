import React from "react";
import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}`;
  }

const clothCategory = [
  { title: "T-Shirts" },
  { title: "Shorts" },
  { title: "Shirts" },
  { title: "Hoodies" },
  { title: "Jeans" },
];

const ClothColors = [
  { color: "#00C12B" },
  { color: "#F50606" },
  { color: "#F5DD06" },
  { color: "#F57906" },
  { color: "#06CAF5" },
  { color: "#063AF5" },
  { color: "#7D06F5" },
  { color: "#F506A4" },
  { color: "#FFFFFF" },
  { color: "#000000" },
];

const ClothSizes=[
    {size:"Small"},
    {size:"Medium"},
    {size:"Large"},
    {size:"X-Large"},
]

const DressStyles=[
    {title:"Casuals"},
    {title:"Formals"},
    {title:"Party"},
    {title:"Gym"},
]

const Sidebar = () => {
  const [adjustment, setAdjustment] = useState(true);
  const [priceAdjustment, setPriceAdjustment] = useState(true);
  const [colorsAdjustment, setColorsAdjustment] = useState(true);
  const [sizeAdjustment,setSizeAdjustment]=useState(true);
  const [dressStylesAdjustment,setDressStylesAdjustment]=useState(true);



  function adjustmentHandler() {
    setAdjustment((prev) => !prev);
  }

  function priceAdjustmentHandler() {
    setPriceAdjustment((prev) => !prev);
  }
  function colorsAdjustmentHandler() {
    setColorsAdjustment((prev) => !prev);
  }
  function sizeAdjustmentHandler() {
    setSizeAdjustment((prev) => !prev);
  }
  function dressStylesAdjustmentHandler() {
    setDressStylesAdjustment((prev) => !prev);
  }

 

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="border-2  rounded-[30px] p-[1.5rem]  max-w-[300px]">
      {!adjustment ? (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Filters</h2>
          <HiOutlineAdjustmentsVertical
            className="text-2xl"
            onClick={adjustmentHandler}
          />
        </div>
      ) : (
        <div className="flex flex-col ">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Filters</h2>
            <HiOutlineAdjustmentsVertical
              className="text-2xl"
              onClick={adjustmentHandler}
            />
          </div>

          <hr className="my-[1rem]" />

          <div>
            {clothCategory.map((category, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between py-[0.5rem]"
                >
                  <h2 className="text-lg ">{category.title}</h2>
                  <MdOutlineNavigateNext className="mt-1 text-lg" />
                </div>
              );
            })}
          </div>

          <hr className="my-[1rem]" />

          {/* ........price adjustment .......... */}
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Price</h2>
              {priceAdjustment ? (
                <FaAngleUp
                  className="text-xl"
                  onClick={priceAdjustmentHandler}
                />
              ) : (
                <FaAngleDown
                  className="text-xl"
                  onClick={priceAdjustmentHandler}
                />
              )}
            </div>
            {priceAdjustment ? <div className="felx items-center justify-center my-6">
                <Box sx={{ width: 250 }}>
                    <Slider
                        getAriaLabel={() => 'Prize range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        className="text-black"

                    />
                </Box>
                
            </div> : ""}
          </div>

          <hr className="my-[1rem]" />

        {/* ...colors adjustment.... */}
          <div>

            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Colors</h2>
              {colorsAdjustment ? (
                <FaAngleUp
                  className="text-xl"
                  onClick={colorsAdjustmentHandler}
                />
              ) : (
                <FaAngleDown
                  className="text-xl"
                  onClick={colorsAdjustmentHandler}
                />
              )}
            </div>

            {colorsAdjustment ? (
              
            <div className="flex items-center justify-center mt-2">
                  <div className="flex flex-wrap gap-3 m-3  items-center  ">
                  {ClothColors.map((colors, index) => {
                    return (
                      <div
                      key={index}
                        className="rounded-full w-[35px] h-[35px]   border-2"
                        style={{ backgroundColor: colors.color }}
                      ></div>
                    );
                  })}
                </div>
            </div>
               
        
            ) : (
              " "
            )}
          </div>

          <hr className="my-[1rem]" />

        {/* size adjustments */}
          <div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Size</h2>
                {sizeAdjustment ? (
                    <FaAngleUp
                    className="text-xl"
                    onClick={sizeAdjustmentHandler}
                    />
                ) : (
                    <FaAngleDown
                    className="text-xl"
                    onClick={sizeAdjustmentHandler}
                    />
                )}
                </div>
                {sizeAdjustment ? <div className="">
                    <div className="flex flex-wrap gap-2 items-center justify-center mt-4">
                        {
                            ClothSizes.map((sizes,index)=>{
                                return (
                                    <button key={index} className="text-lg rounded-full py-[0.6rem] px-[1.9rem] bg-gray-200 border">
                                        {sizes.size}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div> : ""}
          </div>

          <hr className="my-[1rem]" />

        {/* dress styles */}
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Dress Styles</h2>
                {dressStylesAdjustment ? (
                    <FaAngleUp
                    className="text-xl"
                    onClick={dressStylesAdjustmentHandler}
                    />
                ) : (
                    <FaAngleDown
                    className="text-xl"
                    onClick={dressStylesAdjustmentHandler}
                    />
                )}
            </div>

                {dressStylesAdjustment ? 
                <div className="">
                            {DressStyles.map((dressStyle, index) => {
                                return (
                                    <div
                                    key={index}
                                    className="flex items-center justify-between py-[0.3rem]"
                                    >
                                    <h2 className="text-lg ">{dressStyle.title}</h2>
                                    <MdOutlineNavigateNext className="mt-1 text-lg" />
                </div>
              );
            })}
                </div> : ""}
        </div>
         



        </div>
      )}
    </div>
  );
};

export default Sidebar;
