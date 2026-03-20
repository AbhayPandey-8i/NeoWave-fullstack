import React from 'react'
import Header from './Header'

const Login = () => {
    return (
   
   <div> 
    <Header/>
    <div className='absolute'>
        <img className='w-screen h-screen bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ea4545e-42d3-4ebf-82fd-0e1984dc6375/web/IN-en-20260316-TRIFECTA-perspective_789c5633-3949-4708-8e6c-8ddfd22ed696_large.jpg" alt="" srcset="" />
    </div>

     <form className='flex flex-col w-3/12 p-12 my-36 left-0 mx-auto right-0 absolute items-center justify-center bg-black'>
        <div className='flex flex-col bg-white' >
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Password' />
        </div>
     </form>

   </div>

    )
}

export default Login
