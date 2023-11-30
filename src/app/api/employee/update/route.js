import { NextResponse } from "next/server";
import Dbconnect from "@/app/libs/Dbconnect";
import emp from "@/app/libs/EmpModel";

export async function POST(request){
   
    await Dbconnect();
    const empData=await request.json();
  const empInfo=await emp.findById(empData.empId)

    return NextResponse.json(empInfo)
}