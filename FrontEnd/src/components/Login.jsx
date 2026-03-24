import React, { useState } from 'react'
import Header from './Header'
import axios from "axios"
import { API_END_POINT } from '../../utils/constant'
import toast from 'react-hot-toast';
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const Login = () => {

    const [isLogin, setIsLogin] = useState(true) // true = login, false = signup
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const toggleMode = () => {
        setIsLogin(!isLogin)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (isLogin) {
                // LOGIN
                const res = await axios.post(`${API_END_POINT}/login`, {
                    email,
                    password
                })
                console.log("Login Success:", res.data)
                if (res.data.message) {
                    toast.success(res.data.message)
                }
                dispatch(setUser(res.data.user))
                navigate("/browse")
              

            } else {
                // REGISTER
                const res = await axios.post(`${API_END_POINT}/register`, {
                    fullName,
                    email,
                    password
                })
                console.log("Signup Success:", res.data)
                if (res.data.success) {
                    toast.success(res.data.message)
                }
                setIsLogin(true)
                 navigate("/browse")
            }

            // clear fields
            setFullName("")
            setEmail("")
            setPassword("")

        } catch (error) {
           toast.error(error.response.data.message)
            console.log(error.response?.data || error.message)
        }
    }

    return (
        <div>
            <Header />

            <div className='absolute'>
                <img
                    className='w-screen h-screen bg-cover'
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg"
                    alt=""
                />
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col w-3/12 p-12 my-36 left-0 mx-auto right-0 absolute items-center justify-center bg-black opacity-90 rounded-md'>

                <h1 className='text-white text-3xl mb-5 font-bold'>
                    {isLogin ? "Login" : "Sign Up"}
                </h1>

                <div className='flex flex-col'>

                    {/* Show only in signup */}
                    {!isLogin && (
                        <input
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            type="text"
                            placeholder='Full Name'
                            className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
                        />
                    )}

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Email'
                        className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder='Password'
                        className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'
                    />

                    <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>
                        {isLogin ? "Login" : "Sign Up"}
                    </button>

                    <p className='text-white mt-2'>
                        {isLogin ? "New to Netflix?" : "Already have an account?"}
                        <span
                            onClick={toggleMode}
                            className='ml-1 text-blue-400 font-medium cursor-pointer'
                        >
                            {isLogin ? "Sign up" : "Login"}
                        </span>
                    </p>

                </div>
            </form>
        </div>
    )
}

export default Login