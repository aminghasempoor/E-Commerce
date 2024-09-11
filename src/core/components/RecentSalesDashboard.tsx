import {Avatar, AvatarFallback} from "@/components/ui/avatar";

type Props = {
    avatarFallback : string,
    name : string,
    email : string,
    money : number
}
async function RecentSalesDashboard(props : Props){
    return(
        <div className={"flex items-center gap-4"}>
            <Avatar className={"hidden sm:flex h-9 w-9"}>
                <AvatarFallback>{props.avatarFallback}</AvatarFallback>
            </Avatar>
            <div className={"grid gap-1"}>
                <p className={"text-sm font-medium"}>{props.name}</p>
                <p className={"text-sm text-muted-foreground"}>{props.email}</p>
            </div>
            <p className={"ml-auto font-medium"}>{`$${props.money}`}</p>
        </div>
    )
}
export default RecentSalesDashboard