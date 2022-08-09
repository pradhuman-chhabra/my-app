//rfce--use this keyword to get the boiler plate
import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    // this will capitalize the first charachter of the word success and will leav the rest of the chrachters small
    /*The toLowerCase() method converts a string to lowercase letters.
    The toLowerCase() method does not change the original string.
    eg.)let text = "Hello World!";
        let result = text.toLowerCase();

    The charAt() method returns the character at a specified index (position) in a string.
    The index of the first character is 0, the second 1, ...
    eg.)let text = "HELLO WORLD";
        let letter = text.charAt(0);
    
    The slice() method extracts a part of a string.
    The slice() method returns the extracted part in a new string.
    The slice() method does not change the original string.
    The start and end parameters specifies the part of the string to extract.
    The first position is 0, the second is 1, ...
    A negative number selects from the end of the string.
    eg.)let text = "Hello world!";
        Slice the first 5 positions:
        let result = text.slice(0, 5);
        
        From position 3 to the end:
        let result = text.slice(3);
    */

}

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    {/* we just made the class into template literals using ` backicks ` this allows us to use js , using ${variable inside template literals} we can put template literals inside */}
    {/* we want that ki message as a prop aaye alert mein coz ham saara control app.js se karna chahte hai */}

    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
    </button>
    we commented this cross button coz we don't want the user to dismisss the alert
    */}
    </div>
);
}

export default Alert

  
  /*
  && this is a logical and operator which requires that props.alert agr flase hoga toh aage ki cheez evaluate hi nahi hogi 
  but agr props.alert true hogi tabhi aage ki cheez evaluate hogi 
  this is used to escape a major error

  trick and is not add--means if both are true then only final answer is true
  if props.alert is not null then the rest off the part in the rhs will get evaluated
  note that my code worked without it just did coz in the tutorial it seemed to be a problem
  my code was working coz i used these <> and </> wrote everything inside them which did avoid the err but did'nt quite show the alert message
  */