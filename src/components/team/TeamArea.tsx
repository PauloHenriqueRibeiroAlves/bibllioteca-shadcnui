import { menbers } from "@/data/menbers";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TeamItem } from "./teamItem";

export const TeamArea = () => {
    return (
    <Card>
        <CardHeader>
            <CardTitle>Team Menbers</CardTitle>
            <CardDescription>Qualquer coisa na descrição.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
            {menbers.map(item => (
                <TeamItem key={item.id} data={item}/>
            ))}
        </CardContent>
    </Card>
    );
}

