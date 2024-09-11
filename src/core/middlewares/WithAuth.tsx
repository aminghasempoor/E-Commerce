"use client"
import React, {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

function WithAuthMiddleware({ children } : {children : React.ReactNode}) {
    const {getUser} = getKindeServerSession()
    const user = getUser()
    const router = useRouter()
    const pathName = usePathname()
    useEffect(() => {
        if (!user){
            return router.replace(`/${encodeURIComponent(pathName)}`)
        }
    }, [user]);
    return (
        <>
            {children}
        </>
    )
}
export default WithAuthMiddleware