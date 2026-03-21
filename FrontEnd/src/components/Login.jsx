import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {

    const [isLogin, setisLogin] = useState(false)
    const [FullName, setFullName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const loginHandler = () => {
        setisLogin(!isLogin)
    }

    const getInputData = (e) => {
      e.preventDefault()
      console.log(FullName, email, password)

      setFullName(""),
      setemail(""),
      setpassword("")
    }
    




    return (

        <div>
            <Header />
            <div className='absolute'>
                <img className='w-screen h-screen bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg" alt="" />
            </div>

            <form onSubmit={getInputData} className='flex flex-col w-3/12 p-12 my-36 left-0 mx-auto right-0 absolute items-center justify-center bg-black opacity-90 rounded-md'>

                <h1 className='text-white text-3xl mb-5 font-bold' >{isLogin ? "Login" : "Sign up"}</h1>

                <div className='flex flex-col' >

                    {
                        isLogin && <input value={FullName} onChange={(e) => {
                            setFullName(e.target.value)
                        }
                        } type="text" placeholder='Username' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    }


                    <input value={email} onChange={(e) => {
                        setemail(e.target.value)
                    }
                    } type="email" placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <input value={password} onChange={(e) => {
                        setpassword(e.target.value)
                    }
                    } type="password" placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

                  <button className='bg-red-600 mt-6 p-3 text-white rounded-r-sm font-medium '> {isLogin? "Login" : "Signup"} </button>

                    <p className='text-white mt-2' > {isLogin ? "New to Netflix?" : "Already have an account?"} <span onClick={loginHandler} className='ml-1 text-blue-400 font-medium cursor-pointer '> {isLogin ? "Sign up" : "Login"} </span> </p>
                </div>
            </form>

        </div>

    )
}

export default Login
