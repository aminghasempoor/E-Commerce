import DashboardNavigation from "@/components/dashboard/DashboardNavigation";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {CircleUser, LogOut, MenuIcon} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default function DashboardLayout(){
    return(
        <div className={"flex w-full flex-col mx-auto px-4 sm:px-6"}>
            <header className={"sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white"}>
                <nav className={"hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-lg lg:gap-6"}>
                    <DashboardNavigation/>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"outline"} className={"shrink-0 md:hidden"}>
                            <MenuIcon className={"h-5 w-5"} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={"left"}>
                        <nav className={"grid gap-6 text-lg mt-4 font-medium"}>
                            <DashboardNavigation />
                        </nav>
                    </SheetContent>
                </Sheet>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={"secondary"} size={"icon"} className={"rounded-full"}>
                            <CircleUser className={"w-5 h-5"} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align={"end"}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuLabel className={"flex items-center"}>
                            <LogOut className="mr-2 h-4 w-4" /> Log Out
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
        </div>
    )
}