import React, { useState } from 'react'

export default function About() {

    /*
    This myStyle is a javascript object.
    
    In js we write everything which is a style property in DOM as a string.
    eg fontSize:"20rem",backgroundColor:"Black"
    
    and evry style property is camelCased

    i'll be putting this style object in the accordian,accordian button and the accordian description.

    if i make this style object a state vriable then i can change the style according to the click of a button.

        let myStyle={
        color:"white",
        backgroundColor:"black"
    }

    the above way i created my styel object 

    no i am making a state variabkle using useState, ps--useState is the keyword to invoke snippets 

      const [myStyle, setMyStyle] = useState({
        color:"white",
        backgroundColor:"black"
    })

    i'll also have to import the above stuff
    import React,{useState} from 'react'
    
    this is the state variable--using useState(State naam mein hai bhai aur kya signal chaiye), myStyle is the variable name and the setMyStyle is the function to assign new values to the now state variable myStyle 

    */

    /*

    note react mein sirf import mein , return ke end mein lagega
    
    or better remember ki yeh export default function aur return ke andar nahi lagega uske bahar bhar lag jeygea ;
    
    state variable declaration and function declaration return statement mein nahi karna hota

    */
    
    const [myStyle, setMyStyle] = useState({
        color: "black",
        // this color is actually the font color of all the text of the object
        backgroundColor: "white"
    })
    // by default we want that white mode enabled rahe aur option aaye dark mode enable karne ka

    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => 
    
    {
        if (myStyle.color === "black"){
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                border:"1px solid white"
            })

        setBtnText("Enable Light Mode")
        // understood hai jab aapka dark mode enabled hoga tab aapke button par message aayega light mode neable karne ka
        }

        else 
        {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
            setBtnText("Enable Light Mode")
        }
    }
   
return (
    <>
        <div className="container" style={myStyle}>
            {/* this style={myStyle} is an object */}
            <h1 className='my-3'>About us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <div className='my-3'>

                <button type="button" onClick={toggleStyle} class="btn btn-primary">{btnText}</button>
                {/* i just added an onclick event--which will run toggleStyle function */}

            </div>
        </div>
    </>
)
};
