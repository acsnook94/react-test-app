import { useEffect, useState } from "react"
import useFetch from "../custom_hooks/useFetch.";

const Home2 = ()=>{
    // const [data, setData]= useState(null);

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then((res)=>res.json())
    //         .then((data)=>setData(data));
    // }, []);

    //Call custom hook instead of useEffect
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return(
        <>
            {
                data && 
                    data.map((item) =>{
                        return <p key={item.id}>{item.title}</p>;
                    })
            }
        </>
    );

}

export default Home2;