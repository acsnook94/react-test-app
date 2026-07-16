import React from "react";
import { useParams } from "react-router-dom";

export default function Info(){
    const {firstName} = useParams();
    return <h1>Hello, {firstName}!</h1>;
}
 