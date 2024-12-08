import React from "react";


export default function CustomDiv({message,title,children}:{message:string,title:string,children?:React.ReactNode}) {
    return(
        <div>
            <p className={` text-2xl`}>{title}</p>
            <p className={`border-l-4 border-orange-500 pl-2`}>{message}</p>
        </div>
    )
}