import axios from 'axios';
import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { API_END_POINT } from '../../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

const Header = () => {

  const user = useSelector((store) => store.app.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
      console.log(res)
      dispatch(setUser(null))
      navigate("/")
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='z-10 absolute bg-linear-to-b from-black flex w-full items-center justify-between px-6'>
      <img className='w-56' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />

      {
        user && (


          <div className='flex items-center'>
            <IoIosArrowDropdown color='white' size="24px" />
            <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
            <div className='ml-4'>
              <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
              <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Header
