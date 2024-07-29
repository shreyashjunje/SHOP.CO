import React from 'react'

const SizeBtn = ({size}) => {
    return (
        <button className="text-lg lg:w-[20%] w-[100%]  rounded-full py-[0.7rem] px-[1.5rem] bg-gray-200 border">
            {size}
        </button>
    )
  
}

export default SizeBtn