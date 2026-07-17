import { useEffect, useState } from "react";

export default function Timer(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(() => {
           setCount((count)=>count + 1); 
        }, 1000);
    }, []);     //including empty [] arg causes effect to run on first render only

    // useEffect(()=>{
    //     setTimeout(() => {
    //        setCount((count)=>count + 1); 
    //     }, 1000);
    // }, [prop, state]);  //dependency array, effect runs on first render AND whenever these values change

    return <h1>I've rendered {count} times!</h1>;
}