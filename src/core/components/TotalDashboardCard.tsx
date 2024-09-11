import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import React from "react";
type Props = {
    title : string,
    charges : string,
    money : number,
    icon : React.ReactNode
}

function TotalDashboardCard(props : Props){
    return(
        <Card>
            <CardHeader className={"flex flex-row items-center justify-between pb-2"}>
                <CardTitle>{props.title}</CardTitle>
                {props.icon}
            </CardHeader>
            <CardContent>
                <p className={"text-2xl font-bold"}>{`$${props.money}`}</p>
                <p className={"text-xs text-muted-foreground"}>{props.charges}</p>
            </CardContent>
        </Card>
    )
}
export default TotalDashboardCard