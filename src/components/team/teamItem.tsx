"use client"
import { Menber } from "@/type/menber";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { TeamCombobox } from "./team-combobox";
import { Role } from "@/type/Role";
import { useState } from "react";

type Props = {
    data: Menber;
}

export const TeamItem = ({ data }: Props) => {
    const [role, setRole] = useState(data.role);
    
    return (
        <div className="flex gap-4 items-center">
            <div>
                <Avatar>
                    <AvatarImage src={data.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-1 overflow-hidden">
                <div className="truncate">{data.name}</div>
                <div className="truncate text-sm text-muted-foreground">{data.email}</div>
            </div>
            <div>
                <TeamCombobox value={role} setValue={setRole}/>
            </div>
        </div>
    );
}