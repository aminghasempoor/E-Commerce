"use client"
import Link from "next/link";
import {Links} from "@/lib/NavigationLinks";
import {useParams, usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const DashboardNavigation = () => {
    const pathName = usePathname()
    const param = useParams()
    return(
        <>
            {Links.map((link)=>{
                return(
                    <Link key={link.href} href={link.href}
                          className={cn(`/${param.locale}${link.href}` === pathName ? "text-foreground border-b" : "text-muted-foreground hover:text-foreground")}>
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}
export default DashboardNavigation