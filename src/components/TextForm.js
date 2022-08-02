import React, { useState } from "react";
// useState is a hook , and we are imported it from react

export default function TextForm(props) {
  // i am creating an arrow funtion which is characterized by an arrow =>  (   =()=>   ) this thing is present in an arrow function
  // (   =()=>   ) looks like something pointy going through a pair of lips
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    // console.log ek function hai , woh batata hai ki console mein likh do toh use it like a funtion we don't use equal to in a function like
    // console.log="uppercase was clicked"
    // setText("you have clicked on handleUpClick");
    // setText is a function so treat it like one
    let newText=text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
  };

  // Exercise 1: Enhancing TextUtils | Complete React Course in Hindi #9
  
  const handleClearClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText="";
    setText(newText);
  };

  // Exercise 1: Solutions + Shoutouts | Complete React Course in Hindi #11
  // you don't need to use semicolons inside export default function and return statements
  const handleCopy=()=>{
    var text=document.getElementById("myBox")
    text.select()
    // text.select() this function selects all the text in the text variable
    navigator.clipboard.writeText(text.value)

  }

  // Exercise 1: Solutions + Shoutouts | Complete React Course in Hindi #11

  const handleExtraSpaces =()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  /* this is js regex (/[ ]+/) what this does is that it basically that ek ya ek se jyada space hai agr toh split karke array ban jayega aur jab array ban jayega tab usey combine kar denge ek pace ke saath (newText.join(" "))
  */

  //this handleOnChnage function helps us to type in the text box
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here2");
  // wht do i mean by the above statement , that text is a variable hai jisme yeh value by default aa jaye -- Enter text here, aur jab bhie main iss text ko update karunga main issey setText function ki help se update karunga.

  // iska use kya hai main jahan jahan text varible ko use karunga , aur jab bhie main text variable ko update karunga woh update ho jayega jahan jahan woh use hua hain , bina page ko reload karey

  // hooks hamey bina class banaye class ke features use karne mein help karte hain

  // const [text, setText] = useState("Enter text here");

  // useState wil help us in making a state variable 

  // here we are using array desrutucturing

  // i will set the value "Enter text here" into the variable (text) and whenever i want to update it i will update the value inside the variabel using (setText) function , coz here we can't update values using assignment we have to use functions to update the values

  //here setText is the updation function only by using that we'll be able to update the value inside

  // last thing - bolne mein yeh bolenge ki maine text naam ki ek state varible create ki hain aur uski default value "Enter text here" hain

  //Updating the value inside the state variable
  // text = "enter text here"; //wrong way to update text
  // setText("enter text here"); //right way to update a state variable

  // const [text, setText] = useState("Enter text here");

  // yeh hamara state variable aise banay gya hai ki setText ke andar jo bhie chhez aayegi woh text ke andar save kar di jayegi
  //setText ke andar cheezein upadate hoke aayengi
  // setText("you have clicked on handleUpClick");

  return (
    <>
      <div className="container">
        {/* added className in the video--Adding more Logic to TextUtils | Complete React Course in Hindi #8 */}
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* ek kaam hamesha karna hota hain after typing rfc for ko htmlFor kar do aur class ko className kar do */}

          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          {/* we are removing the above text label as it's not looking too good */}

          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
          
        {/* onChange is an evevt in html (jsx) which will run when there is change */}

          {/* note - by default react variables ko check nahi karti hai after clicking on the button due to the event mentioned in button click  a function runs called the handleUpClick function which will update the text variable using setText */}
          
          {/* we can't change text coz the value of text variable is fixed and , on change event hi ab bacha sakta hai , kyonki wohi run hoga jab change hoga textbox mein */}

          {/* the handleOnChange function will help us now */}
          {/* this funtion will run when there is change in the textbox */}

          {/*
          early state of the function

          const handleOnChange = () => {
            console.log("on change");
          };

          the changes we made to help us change the contents of textbox

          const handleOnChange = (event) => {
            console.log("on change");
            setText(event.target.value);
          };

          event object will be passed to this function whne we make any changes
          
          and 

          setText(event.target.value);
          
          will help us update the text state variable
          */}

          {/* at this point when we are typing in the text box nothing is changing coz the value is set to text and it gets updated using setText only so every text we type won't do anything in changing the text variable so the text inside the textbox won't change unlesss we do some changes in the handleOnClick function , which will update the values inside the textbox as we type. */}
          
          {/* earlier row=3 tha but to increase the size of the textbox we can increase the rows to = "8" */}
          
          {/* i have used the text state variable inside the text box */}
        </div>

        {/* we have added a button */}

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Click to UpperCase</button>

        {/* wondering why all the funstions are inside curly braces in the above line its due to the fact that js is written inside curly braces in jsx */}
        {/* onClick is an event in html (JSX is basically HTML) which will happen when the button is clicked */}
        {/* when the button is clicked handleUpClick function will run */}
        {/* button.btn.btn.primary use this text to generate the above button */}

        {/* mx-2 is a class of bbotstrap which gives margin in the x axis */}
        
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Click to LowerCase</button>
        {/* Adding more Logic to TextUtils | Complete React Course in Hindi #8-created naother button as we are adding   */}

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Click to Clear TextBox</button>
        {/* adding button Exercise 1: Enhancing TextUtils | Complete React Course in Hindi #9 */}

        <button className="btn btn-primary mx-1" onClick={handleCopy}>Click to Copy TextBox</button>
        {/* Exercise 1: Solutions + Shoutouts | Complete React Course in Hindi #11 */}

        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Click to remove extraSpaces</button>
        {/* Exercise 1: Solutions + Shoutouts | Complete React Course in Hindi #11 */}

      </div>
      {/*added the second div in -- Adding more Logic to TextUtils | Complete React Course in Hindi #8 */}
      <div className="container my-3">
      {/* my-3 will add a margin of 3 */}
      <h1>Text Summary</h1>
      {/* in js every object has properties and methods 
      length is a property so -- 
      
      variableName.length no brackets involved 
      
      split is a method so , in split there will be brackets
      
      variableName.split()

      */}
      <p>The above textBox has {text.split(" ").length} words and {text.length} length  </p>
      <p> {0.008*text.split(" ").length} mintes are required to read ut completely </p>
      <h2>Preview</h2>
      {/*The below variable contains all of the text written in the textbox*/}
      <p>{text}</p>
      </div>
    </>
  );
}

// ek component ki ek state hoti hain , state means awastha hain
// agr textbos ke andar kuch likha hua hau like "i love you" toh woh bhie ek state hai
// toh ham(Harry bhai) chahte hai ki jo jo content ek textbox mein rakha ho woh ek variable mein rakhe aur update hota rhe jaise jaise state change ho
