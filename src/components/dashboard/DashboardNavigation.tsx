import Link from "next/link";
import {Links} from "@/lib/NavigationLinks";

const DashboardNavigation = () => {
    return(
        <>
            {Links.map((link)=>{
                return(
                    <Link key={link.href} href={link.href}>
                        {link.name}
                    </Link>
                )
            })}
        </>
    )
}
export default DashboardNavigation