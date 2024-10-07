"use client";

import { useCallback, useState } from "react";
import Child from "./Child";
import HTab from "./useTransition/Htab";
import TaskApp from "./useTransition/TaskList";
import UseImage from "./useTransition/UseImage";
export default function Home() {
    const [num, setNum] = useState(0);
    const [name, setName] = useState("Lucy");

    // function changeName() {
    //     setName(e => e + "k");
    // }
    const changeName = useCallback(function () {
        setName(e => e + "k");
    }, []);

    return (
        <>
            <button
                onClick={() => {
                    setNum(e => e + 1);
                }}
            >
                click
            </button>
            <br />
            <button
                onClick={() => {
                    setName(e => e + "i");
                }}
            >
                click2 {name}
            </button>
            <br />
            {num}
            <Child />
            <HTab />
            <br />
            <TaskApp />
            <UseImage />
        </>
    );
}
