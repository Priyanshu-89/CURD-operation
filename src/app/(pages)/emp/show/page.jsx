"use client"
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Link from 'next/link';
// function ShowEmployeePage() {
//     const [employees, setEmployees] = useState([])
//     const [updateKey, setUpdateKey] = useState(Date.now());

//     useEffect(() => {
//         const getAllEmployees = async () => {
//             await axios.get("/api/employee/show").then(res => {
//                 setEmployees(res.data);
//                 //console.log(res.data)
//             })
//         }
//         getAllEmployees();
//     }, [])

    

//     // const removeItem = async (id) => {
//     //     console.log("ID of Employee to remove : ", id);

//     //     try {
//     //         const response = await axios.post("/api/employee/remove", { id });
//     //         console.log(response.data);

           
//     //         // setEmployees((prevEmployees) => prevEmployees.filter(employee => employee.id !== id));

//     //     } catch (error) {
//     //         console.error("Error removing employee:", error);
//     //     }
//     // }


//     const fetchEmployeeData = async () => {
//         try {
//             const response = await axios.get("/api/employee/getAll");
//             setEmployees(response.data);
//         } catch (error) {
//             console.error("Error fetching employee data:", error);
//         }
//     };


//     const removeItem = async (id) => {
//             console.log("ID of Employee to remove : ", id);
    
//             try {
//                 const response = await axios.post("/api/employee/remove", { id });
//                 console.log(response.data);
    
               
//                 // setEmployees((prevEmployees) => prevEmployees.filter(employee => employee.id !== id));
//                 setUpdateKey(Date.now());
//             } catch (error) {
//                 console.error("Error removing employee:", error);
//             }
//         }

    

   



    
//     return (
       
//         <div className='shadow-lg max-w-xl mt-5 rounded-md mx-auto p-4'>
//             <div className='text-center mt-4 mb-6 text-xl font-semibold bg-slate-600 max-w-lg mx-auto p-3 rounded-lg text-slate-200'>Employee Details List</div>
//             {
//                 employees.map((emp, i) => {
//                     return (
//                         <div className='max-w-lg mx-auto p-2'>

//                             <div key={i} className='flex  gap-5 justify-center items-center' >

//                                 <div>

//                                     {emp.empName}
//                                 </div>
//                                 <div>{emp.empSalary}</div>

//                                 <div>
//                                     <button className='px-8 py-1 bg-red-700 text-white font-semibold rounded-md' onClick={() => removeItem(emp._id)}>Delete</button>
//                                 </div>

//                                 <div>
//                                     <Link href={`/emp/update/${emp._id}`} className='px-8 py-1 bg-yellow-600 text-white font-semibold rounded-md'>Update</Link>
//                                 </div>

//                             </div>
                           
//                         </div>
                       
//                     )
//                 })
//             }
             
//              <div className=' flex items-center justify-center mt-8'>
//                                 <Link href={"/emp/add"} className='px-8 py-1 text-center  bg-green-700 text-white font-semibold rounded-md'>Add Employees</Link>
//                             </div>
//         </div>
//     )
// }

// export default ShowEmployeePage










import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function ShowEmployeePage() {
    const [employees, setEmployees] = useState([]);
    const [updateKey, setUpdateKey] = useState(Date.now());

    useEffect(() => {
        const getAllEmployees = async () => {
            try {
                const response = await axios.get("/api/employee/show");
                setEmployees(response.data);
            } catch (error) {
                console.error("Error fetching employee data:", error);
            }
        };
        getAllEmployees();
    }, [updateKey]); // Include updateKey as a dependency to trigger re-fetching when it changes

    const removeItem = async (id) => {
        console.log("ID of Employee to remove : ", id);

        try {
            const response = await axios.post("/api/employee/remove", { id });
            console.log(response.data);

            // Update the state to trigger a re-render
            setUpdateKey(Date.now());
        } catch (error) {
            console.error("Error removing employee:", error);
        }
    };

    return (
        <div className='shadow-lg max-w-xl mt-5 rounded-md mx-auto p-4 bg-slate-200'>
            <div className='text-center mt-4 mb-6 text-xl font-semibold bg-slate-600 max-w-lg mx-auto p-3 rounded-lg text-slate-200'>Employee Details List</div>
            {
                employees.map((emp, i) => (
                    <div className='max-w-lg mx-auto p-2' key={i}>
                        <div className='flex gap-5 justify-center items-center'>
                            <div>{emp.empName}</div>
                            <div>{emp.empSalary}</div>
                            <div>
                                <button className='px-8 py-1 bg-red-700 text-white font-semibold rounded-md' onClick={() => removeItem(emp._id)}>Delete</button>
                            </div>
                            <div>
                                <Link href={`/emp/update/${emp._id}`} className='px-8 py-1 bg-yellow-600 text-white font-semibold rounded-md'>Update</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className='flex items-center justify-center mt-8'>
                <Link href={"/emp/add"} className='px-8 py-1 text-center bg-green-700 text-white font-semibold rounded-md'>Add Employees</Link>
            </div>
        </div>
    );
}

export default ShowEmployeePage;
