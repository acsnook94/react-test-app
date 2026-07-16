// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import './styles/MyStyle.scss';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import '@vitejs/plugin-react/preamble';
import Car from './Car.jsx';
import Garage from './Garage.jsx';
import { Parent } from './family.jsx';
import { Football } from './Football.jsx';
import { Goal } from './goals.jsx';
import MyForm from './MyForm.jsx';
import { ModalTestPage } from './PortalModal.jsx';
import { BtnTestPage } from './PortalButton.jsx';
import MyCarForm from './MyCarForm.jsx';
import MyCheckboxForm from './MyCheckboxForm.jsx';
import MyMultiInputForm from './MyMultiInputForm.jsx';
import MyRadioForm from './MyRadioForm.jsx';


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


// const myElement = (
//   <>
//     <p>I am a paragraph.</p>
//     <p>I am a paragraph too.</p>
//   </>
// );


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


function MyCars(){
  // const cars = ['Ford', 'BMW', 'Audi'];
  // const cars = [['Ford', 0], ['BMW', 1], ['Audi', 2]];
  const cars = [
    {brand: 'Ford', id: 1000}, 
    {brand: 'BMW', id: 1001}, 
    {brand: 'Audi', id: 1002}
  ];

  return(
    <>
      <h1>My Cars:</h1>
      <ul>
        {/* {cars.map((car)=><li>I am a {car[0]}</li>)} */}
        {/* {cars.map((car, index)=><li key={index}>I am a {car}</li>)} */}
        {/* {cars.map((car)=><li key={car[1]}>I am a {car[0]}</li>)} */}
        {cars.map((car)=><li key={car.id}>I am a {car.brand}</li>)}
      </ul>
    </>
  );
}

function MyHeader(){
  return(
    <div>
      <h1>My Header 1</h1>
      <h2>My Header 2</h2>
      <h3>My Header 3</h3>
    </div>
  );
}


createRoot(document.getElementById('root')).render(
  // <h1>Hello React!</h1>
  // <p>Welcome!!</p>
  // myelement
  // myElement
  // myElement2
  // <Car />
  // <Car color="blue" />
  // <Garage />
  // <Parent/>
  // <Football/>
  // <Goal isGoal={true}/>
  // <MyCars/>
  // <MyForm/>
  // <ModalTestPage/>
  // <BtnTestPage/>
  // <MyCarForm/>
  // <MyCheckboxForm/>
  // <MyMultiInputForm/>
  // <MyRadioForm/>
  <App/>
  // <MyHeader></MyHeader>
); 