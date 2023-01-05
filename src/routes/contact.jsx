import { Form, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Contact() {
    const [color, changeColor] = useState("#282c34");
    document.body.style.backgroundColor= color; 

  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

    
  return (	  
    <div  id="contact">

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

      <div>
	  Nothing is here yet...
      </div>

      <div>

{/*        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}
        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
		  {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
*/}

      </div>
    </div>
  );
}

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
