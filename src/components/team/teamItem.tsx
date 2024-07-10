import { Menber } from "@/type/menber";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
    data: Menber;
}

export const TeamItem = ({ data }: Props) => {
    return (
        <div className="flex gap-4 items-center">
            <div>
                <Avatar>
                    <AvatarImage src={data.avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex-1">
                <div>{data.name}</div>
                <div>{data.email}</div>
            </div>
            <div>...</div>
        </div>
    );
}