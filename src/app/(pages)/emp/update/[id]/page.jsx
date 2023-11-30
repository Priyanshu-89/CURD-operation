"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function updatePage({params}) {
  const [empId, setEmpId] = useState(params.id)
  const [empName, setEmpName] = useState("")
  const [empSalary, setEmpSalary] = useState()

  // console.log(params.id)
  useEffect(() => {
    const getEmpData = async () => {
      await axios.post("/api/employee/update", { empId }).then(res => {
        setEmpSalary(res.data.empSalary)
        setEmpName(res.data.empName);
        console.log(res.data)
      })
    }
    getEmpData();

  }, [])
  

  const handleSubmit=async(e)=>{
    e.preventDefault();
      // setEmpName(e.target.value)
      // setEmpSalary(e.target.value)
      let newData = {
        empid : empId,
        newName : empName,
        newSalary : empSalary
      };

      await axios.post("/api/employee/saveandupdate",newData).then(res=>{
        console.log(res.data)
      })
      location.href="/emp/show"
    }

  return (
    <div className="p-4 max-w-md mx-auto bg-slate-300 mt-8 rounded-lg">
      <div className="mb-4 bg-slate-500 p-2 text-center rounded-md text-xl text-slate-200">
        Update Employee Details
        </div>
        <div className="mt-2 mb-4 text-red-500 font-semibold text-center">
          Previous Name: {empName} and Salary is {empSalary}
        </div>
     

      <form onSubmit={handleSubmit} className="mb-4 ">
        <input type="hidden" value={empId} />
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Enter New Name</label>
          <input
            type="text"
            value={empName}
            onChange={(e)=> setEmpName(e.target.value)}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Enter New Salary</label>
          <input
            type="text"
            onChange={(e)=>setEmpSalary(e.target.value)}
            value={empSalary}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        {/* <Link href={`/emp/saveandupdate/${empId}`}className='px-8 py-1 bg-orange-700 text-white font-semibold rounded-md'>Save Changes</Link> */}

       {/* <Link href={`/emp/saveandupate/${emp._id}`} className='px-8 py-1 bg-red-700 text-white font-semibold rounded-md'>Update and Save</Link> */}
      <button type="submit" className='px-8 py-1 bg-orange-700 text-white font-semibold rounded-md'>Save Changes</button>
      </form>
    </div>
  )
}

export default updatePage