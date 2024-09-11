import TotalDashboardCard from "@/core/components/TotalDashboardCard";
import {DollarSign, PartyPopper, ShoppingBag, User2} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import RecentSalesDashboard from "@/core/components/RecentSalesDashboard";

function DashboardComponent() {
    return (
        <>
            <div className={"grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4"}>
                <TotalDashboardCard
                    icon={<DollarSign className={"h-4 w-4 text-green-700"}/>}
                    title={"Total Revenue"} money={100.00}
                    charges={"Based on 100 charges"}
                />
                <TotalDashboardCard
                    icon={<PartyPopper className={"h-4 w-4 text-orange-700"}/>}
                    title={"Total Products"} money={200.00}
                    charges={"Based on 100 charges"}
                />
                <TotalDashboardCard
                    icon={<ShoppingBag className={"h-4 w-4 text-blue-700"}/>}
                    title={"Total Sales"}
                    money={50}
                    charges={"Total sales"}
                />
                <TotalDashboardCard
                    icon={<User2 className={"h-4 w-4 text-indigo-500"}/>}
                    title={"Total Users"}
                    money={250}
                    charges={"Total Users Signed up"}
                />
            </div>
            <div className={"grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10"}>
                <Card className={"xl:col-span-2"}>
                    <CardHeader>
                        <CardTitle>Transaction</CardTitle>
                        <CardDescription>Recent transaction from your store</CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Recent sales</CardTitle>
                    </CardHeader>
                    <CardContent className={"flex flex-col gap-8"}>
                        <RecentSalesDashboard money={450} name={"Amir"} email={"a@a.com"} avatarFallback={"Agh"}/>
                        <RecentSalesDashboard money={200} name={"Sina"} email={"s@s.com"} avatarFallback={"SH"}/>
                        <RecentSalesDashboard money={600} name={"Ali"} email={"a@a.com"} avatarFallback={"AT"}/>
                        <RecentSalesDashboard money={530} name={"Shahrokh"} email={"a@a.com"} avatarFallback={"FG"}/>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default DashboardComponent