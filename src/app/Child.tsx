"use client";

import { memo, useState } from "react";
interface props {
    num: number;
    changeName?: () => void;
}
export default memo(function Child() {
    const [count, setCount] = useState(0);

    console.log(count, setCount);
    return (
        <>
            {/* <button onClick={changeName}>click to changeName</button> */}
            Im child component #{count}
        </>
    );
});
