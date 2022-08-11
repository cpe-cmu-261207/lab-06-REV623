import {
    IconChevronDown,
    IconChevronUp,
} from "@tabler/icons";
import { useState } from "react";
import UserCardDetail from "./usercarddetail";

export default function UserCard(props){
    const[isClick,setIsClick] = useState(false);
    const onClickHandler = () => {
        if(isClick) setIsClick(false);
        else setIsClick(true);
    };

    return(
        <div className="border-bottom" onClick={()=>{onClickHandler()}}>
            {/* main section */}
            <div className="d-flex align-items-center p-3">
                <img
                src={props.img}
                width="90px"
                class="rounded-circle me-4"
                />
                <span className="text-center display-6 me-auto">{props.name}</span>
                {
                    isClick ? <IconChevronUp /> : <IconChevronDown />
                }
            </div>
            {
                isClick && <UserCardDetail key={props.name} email={props.email} address={props.address}/>
            }
        </div>
    )
}