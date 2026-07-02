
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

function Car(props){
    return(
        <h2>Hi, I'm a {props.color} Car!</h2>
    );
}

export default Car;