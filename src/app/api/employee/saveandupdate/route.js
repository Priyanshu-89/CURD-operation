import { NextResponse } from "next/server";
import Dbconnect from "@/app/libs/Dbconnect";
import emp from "@/app/libs/EmpModel";
export async function POST(request) {
    await Dbconnect();
    const empUpdateData = await request.json()
    console.log(empUpdateData)
    let newInfo = {
      
        empName : empUpdateData.newName,
        empSalary : empUpdateData.newSalary
    }
    console.log("New Info ",newInfo)
    const empUpdateInfo = await emp.findByIdAndUpdate(empUpdateData.empid,newInfo)
    return NextResponse.json({message:"updating...."})
}