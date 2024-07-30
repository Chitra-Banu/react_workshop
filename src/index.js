import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Class1 from './Class1';
import Display from "./Class1"
const root = ReactDOM.createRoot(document.getElementById('root'));

// function Name(){
//   const name="banu"
//   return(
//     <p>Hello,My name is {name}! </p>
//   )
// }

// function Age(){
//   const age=22;
//   return(
//     <p>Age : {age}</p>
//   )
// }

// function Roll(){
//   const roll="23MCA009"
//   return(
//     <p>Roll Number : {roll}</p>
//   )
// }
root.render(
  <React.StrictMode>
    <App />
    {/* <Class1/> */}
    {/* <Name/>
    <Age/>
    <Roll/> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
