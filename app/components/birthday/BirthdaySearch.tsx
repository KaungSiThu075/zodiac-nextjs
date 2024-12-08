"use client";

import {useRouter} from "next/navigation";
import React, {FormEvent} from "react";
import getHoroscope from "@/app/components/searchZoidac";

export default function DateSearch(){

    const router = useRouter();

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const birthDay = new Date(e.currentTarget.birthDay.value);
        const zodiacSign = getHoroscope(birthDay);
        router.push(`/${zodiacSign}`)
    }

    return(
        <div>
            <form className={" flex flex-col items-center justify-center gap-5 my-5"} onSubmit={handleSubmit}>
                <input
                    required={true}
                    className={` outline p-1 w-full rounded`}
                    id={"birthDay"}
                    type={"date"}
                />
                <button
                    className={" cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 py-1 px-5 rounded-lg hover:bg-amber-600 text-gray-200 hover:text-white"}
                    type={"submit"}
                >
                    SEARCH
                </button>
            </form>
        </div>
    )
}

