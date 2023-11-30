"use client"
import React, { useState } from 'react'
import axios from 'axios'

const Registration = () => {
   const [fullName, setFullName]=useState("");
   const [userName, setUserName]=useState("");
   const [password, setPassword]=useState("");
   const [email, setEmail]=useState("");
   const [status,setStatus]=useState("");

 const handleSubmit=async(e)=>{
    console.log("Yah !")
        e.preventDefault();
     
        console.log("hello")
const userInformation={fullName, userName, password, email}
const userResponse1= await axios.post("/api/regis",userInformation)
console.log(userResponse1.data)
setStatus(userResponse1.data.status);
}  

   
    return (
        <>
         
            <div className="container">
            {/* <h1>Registration Form</h1> */}
           <form onSubmit={handleSubmit}>
           <div>
          {
            status!="" ? (
              <p className='bg-[#22555e] text-center text-xl p-2 rounded-md text-white'>{status}</p>
            ) : ''
          }
        </div>
                    <div>
                        <label className='text-2xl mb-8 mx-[15px] my-[15px] text-white ' >Full Name:</label>
                        <input onChange={(e)=>setFullName(e.target.value)} className='text-lg px-[15px] pb-[10px] py-[15px] pt-[15px] mb-[25px] w-full border-none rounded-xl outline-none' type="text" name='fullname' placeholder='Enter Full Name' autoComplete='off' />
                    </div>
                    
                      <div>
                        <label className='text-2xl mb-8 mx-[15px] my-[20px] text-white '>User Name:</label>
                        <input onChange={(e)=>setUserName(e.target.value)} className='text-lg px-[15px] pb-[10px] py-[15px] pt-[15px] mb-[25px] w-full border-none rounded-xl outline-none' type="text" name='username' placeholder='Enter User Name' autoComplete='off' />
                    </div>
                    
                    <div>
                        <label className='text-2xl mb-8 mx-[15px] my-[15px] text-white '>Email:</label>
                        <input onChange={(e)=>setEmail(e.target.value)} className='text-lg px-[15px] pb-[10px] py-[15px] pt-[15px] mb-[25px] w-full border-none rounded-xl outline-none' type="text" name='email' placeholder='Enter Your Email' autoComplete='off'  />
                    </div>
                    
                    <div>
                        <label className='text-2xl mb-8 mx-[15px] my-[15px] text-white '>Password:</label>
                        <input onChange={(e)=>setPassword(e.target.value)} className='text-lg px-[15px] pb-[10px] py-[15px] pt-[15px] mb-[25px] w-full border-none rounded-xl outline-none' type="text" name='password' placeholder='Enter Your Password' autoComplete='off'  />
                    </div> 
                    

                    <button type='submit' className='text-xl font-bold mt-[20px] mb-[20px] px-2 py-3 w-1/2 border-none rounded-md bg-[#1D332D] text-white hover:bg-[#51939F] hover:text-[#1D332D] hover: transition-all duration-300'>Registration</button>
                </form>
                </div>
            <div>
                {
                    status==" You Failed" ? (
                        <p>Unauthorised user</p>
                    ):
                    <p></p>
                }
            </div>

        </>
    )
}

export default Registration
