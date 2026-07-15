// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import '@vitejs/plugin-react/preamble';
import { lazy, Suspense } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import btnStyles from './Button.module.css';
import hStyles from './BlueHeader.module.css';
import myStyles from './my-style.module.css';

import Car from './Car';
import { BrowserRouter } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Content from './Content';

//will allow object to load slowly enough to see <Suspense> fallback msg
const Header = lazy(()=>import('./Header'));
const Sidebar = lazy(()=>import('./Sidebar'));
const Content = lazy(()=>import('./Content'));

const MyHeader = styled.h1`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #007bff;
`;

const SuccessButton = styled(Button)`
  background-color: #28a745;
`;

const GlobalStyle = createGlobalStyle`
  h1{
    color: white;
    background-color: purple;
    font-family: helvetica; //, sans-serif;
  }

  .myparagraph{
    font-family: courier, monospace;
    color: blue;
  }
`;


function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <GlobalStyle/>
        <MyHeader>Welcome!</MyHeader>
        <h1 className='myheader'>myheader Hello World!!!</h1>

        <Button btntype='primary'>Primary Button</Button>
        <br/>
        <br/>
        <Button>Secondary Button</Button>
        <br/>

        <div>
          <PrimaryButton>Primary</PrimaryButton>
          <SuccessButton>Success</SuccessButton>
        </div>
        
        <Suspense fallback={<div>Loading.....</div>}>
          <Header/>
          <div style={{display: 'flex'}}>
            <Sidebar/>
            <Content/>
          </div>
        </Suspense>

        <Car/>
        <br/>

        {/* <button className={`${btnStyles.mybutton} ${btnStyles.primary}`}> */}
        <button className={`${btnStyles.primary}`}>
          My Primary Button
        </button>
        {/* <button className={`${btnStyles.mybutton} ${btnStyles.secondary}`}> */}
        <button className={`${btnStyles.secondary}`}>
          My Secondary Button
        </button>

        <p className={myStyles.myparagraph}>
          My Paragraph
        </p>

        <p className='myparagraph'>
          My Paragraph (from global style)
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;