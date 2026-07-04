
// class Car {
//   constructor(name) {
//     this.brand = name;
//   }

//   present(){
//     return 'I have a ' + this.brand;
//   }
// }

import React from "react";

// class Car extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {color:"red"};
//     }

//     render(){
//         return <h2>I am a {this.state.color} Car!</h2>
//     }
// }

// class Car extends React.Component{
//     // constructor(props){super(props);}

//     render(){
//         return <h2>I am a {this.props.color} Car!</h2>;
//     }
// }


// export default function Car(){
//   return(
//     <h2>Hi, I am a Car!</h2>
//   );
// }


// function Car(props){
// function Car({color, brand}){ //param destructuring
function Car({color/*="white"*/, brand, ...others}){ //param destructure with default color value set, indeterminate # of params
    // const {color, brand} = props; //destructure to get only desired props
    const brandLine = `My brand is ${brand}. My make is ${others.make} and my model name is ${others.model}.`;

    return(
        <>
            {/* <h2>Hi, I'm a {props.color!=null ? (props.color + "colored ") : ""} Car!</h2>
            <h3>My brand is {props.brand}.</h3> */}
            {/* <h2>Hi, I'm a {color!=null ? (color + " colored") : ""} Car!</h2> */}
            {(color) && <h2>Hi, I'm a {color + " colored"} Car!</h2>}
            {/* <h3>My brand is {brand}. My make is {others.make} and my model name is {others.model}.</h3> */}
            {color ? <h3>{brandLine}</h3> : <h2>{brandLine}</h2>}
        </>
    );
}

export default Car;