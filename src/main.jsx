// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import './styles/MyStyle.scss';

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
import Timer from './Timer.jsx';

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

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  // <h1>Hello React!</h1>
  // <p>Welcome!!</p>
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
  // <MyHeader></MyHeader>
<Timer/>
  // <App/>
); 