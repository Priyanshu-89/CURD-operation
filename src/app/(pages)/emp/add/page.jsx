"use client"
import axios from 'axios';
import React, { useState } from 'react'
import Link from 'next/link';

function AddEmployeePage() {
    const [empName, setEmpName] = useState("")
    const [salary, setSalary]=useState();
    const [isSaved, setIsSaved]=useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const empData={
            empName,
            salary
        }
        await axios.post("/api/employee/add",empData).then(res=>{
            console.log("resonse", res)
            if(res.status==200){
                setIsSaved(true)
                //alert("one employee added")
            }
            console.log(res.data)
        })
        .catch(error=>{
            console.error("Error", error)
        });
      
        
        console.log(empData)
    }
  return (
    <>
    {/* <div className='text-center mt-4 mb-4 text-xl font-semibold bg-slate-500 max-w-md mx-auto p-3 rounded-lg text-slate-200'>Add Employess Details Here</div> */}
    <div className="max-w-md mx-auto my-4">
    <form onSubmit={handleSubmit} className="bg-slate-200 shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
      <div className='text-center mt-2 mb-6 text-xl font-semibold bg-slate-500 max-w-md mx-auto p-3 rounded-lg text-slate-200'>Add Employess Details Here</div>
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="employeeName">
          Employee Name
        </label>
        <input
          type="text"
          id="employeeName"
          autoComplete='off'
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="salary">
          Salary
        </label>
        <input
          type="text"
          id="salary"
          autoComplete='off'
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Employee
        </button>

       
        <Link href={"/emp/show"} className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Show Employee Details</Link>
    
      </div>
    </form>
    {
        isSaved ? <p className='p-3 bg-slate-200 max-w-3xl text-lg rounded-lg text-center font-semibold'>{empName} Record Added</p> : " "
    }
  </div>
  </>
  )
}

export default AddEmployeePage