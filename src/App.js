import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//we need to import the component from the diretory
//its a good havit to store all of your components in your components folder 
import React,{useState} from 'react';
// state variable use kar rhe ho toh yeh imposrt bhie karna hota hai
import Alert from './components/Alert';


// import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
// copied stuff from the react router website-- from the heading example 1 basic routing


function App() {

  // essentially i want all of the controls from the app.js so i am typing this dark mode inside the app.js
  const [mode,setMode] = useState("light")//whether dark mode is enabled or not
  //this is a state variable which will tell us whether the dark mode is enabled or not mode is storing the value "light" inside the variable (mode), we pass this variable to navbar which will passs it as a prop to the Navbar.js
  const [alert, setAlert] = useState(false)//state variable for alert, ill also pass this state variable into alert as a{ dynamic variable }, coz uk its the only way to write js in jsx

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
      // alert ko hamne create kiya tha as a state varibale and with the help of setAlertwe are making it into an object having message and type MediaKeySession, type is the type of alert , the are several type of alerts in bootstrap like danger , success etc
    })
    setTimeout(()=>{
      setAlert(null);
    },3000);
    // this will dismiss the message after 1500 miniseconds or 1.5 seconds
  }

  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert('DarkMode has been enabled!',"success")
      // ab ham value pass kar rhe hai ek function ko toh string bhejna bhie chalega as we are passsing it to the function toh ham toh value hi bhejenge, aage uska kaam jaane woh object mein jaaye uski marzi
      document.title="TextUtils-Light Mode"
      //this will dynamically change the title of the website
    }
    else{
      setMode("dark")
      // setMode is a function toh function kaise use hote hai like --- setMode()
      document.body.style.backgroundColor = '#042743'
      showAlert('LightMode has been enabled!',"success")

      // now if you want to create a website which shows up like an advertisement and title keeps on blinking you are in luck, reminder this is not a good user experience -- so we are commenting it out

      // document.title="TextUtils-Dark Mode"
      // setInterval(() => {
      //   document.title="TextUtils-is Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now"        
      // }, 1500);
    }

  }
  return (
  <>
  <Router>
    {/*here i am passing props to a component ki mera title yeh ho ,,,, “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.*/}

    {/*<Navbar title="TextUtils" aboutText="About Textutils"/>*/}
    {/*<Navbar/>*/}
    {/*just to test a navbar when we Don't pass any value , we can set default values for props*/}

    <Navbar title="TextUtils" mode={mode} aboutText={"About"} toggleMode={toggleMode}/>
    {/* harry bola ek function banaunga aur ek prop bhejunga , toggleMode naam ka ek function banuanga aur yeh navbar ko bhej dunga */}
    {/* i will send togglemode function as a prop to the the navbar */}
    {/* props={whatever is passed as a prop} 
    mode={mode-mode is passed as a prop}
    */}
    {/* mode={mode} the mode inside curly braces is the state variable mode
    js is written inside curly braces */}
    <Alert alert={alert}/>
    {/* here {state variale} alert is apssed on as a prop to Alert.js and in Alert.js there is props.alert
    Alert.js has a capital A in the beginning so alert="this is and alert , mein lhs batata hai ki prop name kya hai as prop recieve props.alert naam se ho rha hai" */}
    <div className='container' my-3>
    {/* my-3 is a classname in botstrap used to give a  magin of 3 in the y axis*/}

    
    {/*
    <Switch>
    /users --> Component 1
    /users/home --> Component 2
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
          </Route>
          i pasted the textform inside the switch
    </Switch>
          Apparently switches are depreciated
    
    copied this switch from the react router website */}
 
    {/* 
    /users --> Component 1
    /users/home --> Component 2 
    exact is used to make sure react reads the exact page we want , suppose we want component 2 but it loads component 1 just coz the initial dirctory matches
    */}
    <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/>} />
        {/* i pasted the textform inside the switch */}
        <Route exact path="/about" element={<About/>} />
    </Routes>


    {/* <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}/> */}
    {/* here i passed show alert function to the textform components as a props as i want to show alert whenever buttons are clicked */}
    {/* i passes this heading thing as props to the compnent TextFrom
    jis jis ko mode transfer kiya gya hai wohan par dark mode ke changes aayenge*/}
    </div>
    <div>
      {/* <About/> */}
    </div>
    </Router>
    </>
  ); 
}
export default App;