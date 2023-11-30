import { NextResponse } from "next/server";
import Dbconnect from "@/app/libs/Dbconnect";
import emp from "@/app/libs/EmpModel";

export async function POST(request) {
    const empInfo = await request.json();
    const { id } = empInfo;

    console.log("EmpId to remove :", id)
    await Dbconnect();
    try {
        await emp.findByIdAndDelete(id)

        // Fetch the updated employee list after deletion
        const restdata = await emp.find({});
        return NextResponse.json(restdata)
    } catch (error) {
        console.log(error)
    

    return NextResponse.json({ message: "Removing employee" })
    }
}