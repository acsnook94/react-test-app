import React from "react";

export default function Header(){
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    return(
        // <header></header>
        <>
            {/* <h1 style={{color: 'red', backgroundColor: 'lightblue'}}>Hello Style!</h1> */}
            <h1 style={myStyle}>Hello Style!</h1>
            <p>Add a little style!</p>
        </>
    );
}