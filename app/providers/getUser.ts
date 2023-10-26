"use client"
import { useSession, signIn, signOut } from "next-auth/react";

const GetUser = (session:any) => {
    let email;

    if (session) {    
        email = session?.user?.email
        console.log('email:332432',email);
    return email;
    } else {
        return false;
    }
}

export default GetUser;