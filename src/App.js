import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import { Form, Link } from "react-router-dom";

//import { withRouter } from 'react-router-dom'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

return (
    <div className="App">
      <div style={{color: "#82D7F7", 
		   display: "flex", 
		   alignItems: "center",
		   justifyContent:"space-between",
		   borderBottom: "4px solid #82D7F7",
		   padding: "0 16px",
		   position: "sticky"}} id="sidebar">

        <h1 style={{color: "#82D7F7"}}>  Hello, I'm Jowett Chan
	</h1>
	    <div>
	      <Link to={`/home`} style={textstyle} >   About me</Link>            
	      <Link to={`/contacts`} style={textstyle}> Publications/Talks</Link>
	      <Link to={`/about`} style={textstyle2}> Data</Link>
	  </div>
      </div>

       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
          className="App-link"
//         href="https://reactjs.org"
          href="http://localhost:3000"
//         target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
          <p>     hello       </p>
         </a>
 	<p> hello no underline </p>
 	<p> hello no underline </p>
       </header>
     </div>
  );
}

export default App;


const textstyle={
    textDecoration: 'none',
    color: "#82D7F7",
    fontFamily: "Helvetica",
    fontSize: "16px",
    marginLeft: "24px"
}

const textstyle2={
    textDecoration: 'none',
    color: "#82D7F7",
    fontFamily: "Helvetica",
    fontSize: "16px",
    marginLeft: "24px",
    marginRight: "10px"
}
