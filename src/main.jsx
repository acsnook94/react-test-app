// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import '@vitejs/plugin-react/preamble';
import Car from './Car.jsx';
// import Model from './Model.jsx';


// const myelement = (
//   <table>
//     <tbody>
//       <tr>
//         <th>Name</th>
//       </tr>
//       <tr>
//         <td>John</td>
//       </tr>
//       <tr>
//         <td>Elsa</td>
//       </tr>
//     </tbody>
//   </table>
// );

// const str = "JSX";
// const myElement = <h1>I Like JSX!</h1>;
// const myElement = <h1>I Like {str}!</h1>;

const myElement = (
  <>
    <p>I am a paragraph.</p>
    <p>I am a paragraph too.</p>
  </>
);

// const myElement2 = <p className='uselessClass'>This is MyElement2</p>;

// class Car {
//   constructor(name) {
//     this.brand = name;
//   }

//   present(){
//     return 'I have a ' + this.brand;
//   }
// }

// class Model extends Car{
//   constructor(name,mod){
//     super(name);
//     this.Model=mod;
//   }
//   show(){
//     return this.present() + ', it is a ' + this.Model;
//   }
// }

// const myCar = new Car("Chevrolet");
// myCar.present();
// const myCarModel = new Model("Ford", "Mustang");
// myCarModel.show();


// function Car(){
//   return(
//     <h2>Hi, I am a Car!</h2>
//   )
// }

createRoot(document.getElementById('root')).render(
  // <h1>Hello React!</h1>
  // <p>Welcome!!</p>
  // myelement
  // myElement
  // myElement2
  // <Car />
  <Car color="blue" />
)  