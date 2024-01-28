import { NextResponse } from "next/server"

export function GET(request){
    const users =[
        { 
            name: "user1",
            email:"nadia@gamil.com"
        },
        { 
            name: "user1",
            email:"nadia@gamil.com"
        },
        { 
            name: "user1",
            email:"nadia@gamil.com"
        },
        { 
            name: "user1",
            email:"nadia@gamil.com"
        },
        { 
            name: "user1",
            email:"nadia@gamil.com"
        },
    ]

    return NextResponse.json(users);
}