"use client"
import Link from "next/link";
import {Links} from "@/lib/NavigationLinks";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const DashboardNavigation = () => {
    const pathName = usePathname()
    return(
        <>
            {Links.map((link)=>{
                return(
                    <Link key={link.href} href={link.href} className={cn(link.href === pathName ? "text-foreground border-b" : "text-muted-foreground hover:text-foreground")}>
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}
export default DashboardNavigation