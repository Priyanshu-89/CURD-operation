import Dbconnect from "@/app/libs/Dbconnect";
import emp from "@/app/libs/EmpModel";
import { NextResponse } from "next/server";

export async function GET(request){
    let allData=[];
    try {
        await Dbconnect();
        allData =await emp.find({})     
    } catch (error) {
       console.log("Error" ,error) 
    }
    return NextResponse.json(allData)
}