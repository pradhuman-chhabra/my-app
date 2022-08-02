//protip-use rfc commant to get the basic snippet
import React from "react";
//to use the propTypes keyword we need to import props
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={'navbar navbar-expand-lg navbar-&{props.mode} bg-&{props.mode}'}>
        {/*  
        I have put the above bootstrap class in {} as i want to write javascript and i want to pass on props to the bootstrap which is now javascript as js allows us to pass props and by doing so we can alter the style -- color -- for dark mode here in bootstrap using js props

        agr bootsrap hot toh--className--navbar navbar-expand-lg navbar-"dark" bg-"light" aise hota 

        props app.js se aayenge toh ek main file se ham props pass karke individual componenets ki jas ko change kar sakte hain.
        
        We use props in React to pass data from one component to another (from a parent component to a child component(s)). Props is just a shorter way of saying properties. They are useful when you want the flow of data in your app to be dynamic.

        &{}lagane ke baad i can use variables inside javascript
        */}
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
                {/*Replace all the href="#" with href="/"*/}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
            This is the search bar and the button
            */}
            {/*this will give us errors coz erlier it was just----<hr className="dropdown-divider">----now to prvent errors use / to end the tags which give errors----<hr className="dropdown-divider"/>*/}
           
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> 
            </div>
          
          </div>
        </div>
      </nav>
    </>
  );
}
//Note-you can find errors in console
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  // is required will make it compulsory to pass on the
  //jo cheez ap nahi chahte ki undefined rahe uske liye put in .isRequired
  aboutText: PropTypes.string.isRequired,
};
// This is to make sure that wehatever props are passed to the components are of the right data type
// this is a utility in order to ensure that ki ham jab koi component multiple time use kare toh ham useme ham koi glt prop naa pass kar de components ko , we can look for errors in the console section
// if we forget to pass on values to props we can make default values for props so that they will be added to the components by default
//this is a default props
Navbar.defaultProps = {
  title: "enter you title",
  aboutText: "enter about",
};
