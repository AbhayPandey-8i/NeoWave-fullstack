import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className='z-10 absolute bg-linear-to-b from-black flex w-full items-center justify-between px-6'>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
      <div className='flex items-center'>
        <IoIosArrowDropdown color='white' size="24px" />
        <h1 className='text-lg font-medium text-white'>Abhay-MERN</h1>
        <div className='ml-4'>
        <button className='bg-red-800 text-white px-4 py-2'>LogOut</button>
        <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
        </div>
      </div>
    </div>
  )
}

export default Header
