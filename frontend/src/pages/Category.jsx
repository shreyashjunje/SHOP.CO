import React from 'react'
import { MdOutlineNavigateNext } from "react-icons/md";
import Sidebar from '../components/core/Category/Sidebar';

const Category = () => {
  return (
    <div className='mx-auto flex flex-col w-11/12 max-w-maxContent justify-between gap-4'>
        <div className='flex items-start justify-start'>
            <span className='flex items-center justify-center'>Home <MdOutlineNavigateNext className='mt-1 '/></span>
            <span>Category</span>
        </div>

        <div>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Category