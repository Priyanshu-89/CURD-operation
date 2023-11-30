import { NextResponse } from "next/server";
import Dbconnect from "@/app/libs/Dbconnect";
import emp from "@/app/libs/EmpModel";

export async function POST (request){
    let empdata =await request.json()
    console.log(empdata)

    await Dbconnect();
    try {
        // let  isEmp = emp.find({empName:empdata.empName})
        // if(!isEmp)
            await emp.create({empName:empdata.empName,  empSalary:empdata.salary})
            
    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({message: "Emp added"})
}

//In this page we created document
   // ******** this is for constant data we passed ********* 
// export async function GET(request){
//     await Dbconnect();
// }

    
//     try {
//         await emp.create({empName:"Julie", empSalary:"15498"})
//     } catch (error) {
//         console.log(error)
//     }

//     return NextResponse.json({message:"Employee added"})


// ******** this is for constant data we passed end *********  

// ********* this code is for how to create our filed using valiables *********
// export async function POST(request){
//     let empData=request.json()
//     let empName=empData.empName
//     let empSalary=empData.empSalary
//     await Dbconnect();

//     try {
       
//     } catch (error) {
        
//     }
   
// }

