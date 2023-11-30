import { NextResponse } from "next/server";
import { userData } from "@/app/models/UserData";
export async function POST(request) {
    const body = await request.json();
    console.log(body)

    const { fullName, userName, password, email } = body;

    let found = false;
    for (let i = 0; i < userData.length; i++) {
        if (fullName == userData[i].fullName && userName == userData[i].userName && password == userData[i].password && email == userData[i].email) {
            found = true;
            break;
        }
    }

    if (found == true)
        return NextResponse.json({ status: "You successed" })
    else
        return NextResponse.json({ status: "You failed" })

}
