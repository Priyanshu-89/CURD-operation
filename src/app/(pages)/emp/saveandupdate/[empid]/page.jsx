"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function page({params}) {

  console.log(params)
  const [empId, setEmpId]=useState(params.empid)

  // const [empName, setEmpName] = useState("")
  // const [empSalary, setEmpSalary] = useState()
  

  useEffect(() => {
    const empData=async()=>{
     
        await axios.post('/api/employee/saveandupdate', { empId }).then(res=>{
     console.log(res.data)
        })
     
    }
  
   empData()
  }, []);
  return(
    <div>
      Updating Employee
    </div>
  ); 

}


export default page



