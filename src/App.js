import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//we need to import the component from the diretory
//its a good havit to store all of your components in your components folder 
import React,{useState} from 'react';
// state variable use kar rhe ho toh yeh imposrt bhie karna hota hai

function App() {

  // essentially i want all of the controls from the app.js so i am typing this dark mode inside the app.js
  const [mode,setMode] = useState("light")
  //this is a state variable which will tell us whether the dark mode is enabled or not mode is storing the value "light" inside the variable (mode), we pass this variable to navbar which will passs it as a prop to the Navbar.js

  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor = 'white'
    }
    else{
      setMode("dark")
      // setMode is a function toh function kaise use hote hai like --- setMode()
      document.body.style.backgroundColor = '#042743'
    }

  }
  return (
  <>
    {/*here i am passing props to a component ki mera title yeh ho ,,,, “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.*/}

    {/*<Navbar title="TextUtils" aboutText="About Textutils"/>*/}
    {/*<Navbar/>*/}
    {/*just to test a navbar when we Don't pass any value , we can set default values for props*/}

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    {/* harry bola ek function banaunga aur ek prop bhejunga , toggleMode naam ka ek function banuanga aur yeh navbar ko bhej dunga */}
    {/* i will send togglemode function as a prop to the the navbar */}
    {/* props={whatever is passed as a prop} 
    mode={mode-mode is passed as a prop}
    */}
    {/* mode={mode} the mode inside curly braces is the state variable mode
    js is written inside curly braces */}
    
    <div className='container' my-3>
    {/* my-3 is a classname in botstrap used to give a  magin of 3 in the y axis*/}
    <TextForm heading="Enter the text to analyze" mode={mode}/>

    {/*
    i passes this heading thing as props to the compnent TextFrom
    jis jis ko mode transfer kiya gya hai wohan par dark mode ke changes aayenge 
    */}
    </div>
    <div>
      {/* <About/> */}
    </div>
    
    </>
  ); 
}
export default App;



