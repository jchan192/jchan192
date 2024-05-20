import { Form, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Contact() {
    const [color, changeColor] = useState("#282c34");
    document.body.style.backgroundColor= color; 

    const contact = {
	avatar: "https://www.astr.tohoku.ac.jp/~jchan/spherical_collapse800.gif",
	favorite: true,
    };

    const contact_2 = {
	avatar: "https://www.astr.tohoku.ac.jp/~jchan/slice_core.gif",
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
	      <Link to={`/home`} style={textstyle} >    About me</Link>            
	      <Link to={`/contacts`} style={textstyle}> Simulations</Link>
	  </div>
      </div>

      <div style={{color: "white", 
		   padding: "10px 30px",		 
		   display: "flex",
//		   maxWidth: "1500px", // Limit maximum width to prevent text from stretching too wide
	}}>
	  <div style={{flex: "1",
		       maxWidth: "700px",
		       paddingRight: "60px",
		      }}>
	      <span style={{fontWeight: "bold", 
			    fontSize: 25, 
			   }}>
		  N-body Simulation <br/> <br/>
	      </span>
	      Simulations of the Cold Dark Matter model are done by performing N-body simulations, like the gif on the right. We initialize the box with a lot of test particles, where each has certain particle mass, positions and velocities. The movement of the particles are only influenced by the their self gravity, so we assume no collision between particles. As you can see, such gravitational N-body simulation always leads to formation of a gravitatonally bound object. And we call them <span style={{fontWeight: "bold",color: '#82D7F7'}}>Halo</span>! 
<br/><br/>

	      Such a theoretical prediction using computer simulations allows us to test the Cold Dark Matter model against observations. For instance, we can measure the numebr of these haloes, and the inner structure of these haloes that allows us to compare with the galaxies we observed in our local universe.

	  </div>

	  <div>
	  <img
	      style={{
//		  marginLeft: "auto",
		  width: "400px",
		  height: "400px",
		  padding: "10px 10px",
	      }}
	      key={contact.avatar}
	      src={contact.avatar || null}
	  />

	  </div>
      </div>

      <div style={{color: "white", 
		   padding: "10px 30px",		 
		   display: "flex",
//		   maxWidth: "900px", // Limit maximum width to prevent text from stretching too wide
	}}>

	  <div style={{flex: "1",
		       maxWidth: "700px",
		       paddingRight: "60px",
		      }}>
	  <span style={{fontWeight: "bold", fontSize: 25}}>
	      Fuzzy Dark Matter Simulation <br/> <br/>
	  </span>
	  Here is another simulation of a diffferent kind of dark matter model, namely the Wave Dark Matter model. Such a simulation is performed by numerically solving the Schordinger-Poisson equation, and we can see a resulting gravitationaly bound halo, similar to the N-body simualtion. In fact, the wave-like dynamics are the distinct feature that differentiates this model from the characteristics observed in Cold Dark Matter simulation. 

	  </div>

	  <div>
	  <img
	      style={{
//		  marginLeft: "auto",
		  width: "400px",
		  height: "400px",
		  padding: "10px 10px",
		  transform: "scaleX(1.2) scaleY(1.0)" // Adjust these values as needed
	      }}
	      key={contact_2.avatar}
	      src={contact_2.avatar || null}
	  />

	  </div>

      </div>

      <div style={{color: "white", 
		   padding: "10px 30px",		 
		   maxWidth: "900px", // Limit maximum width to prevent text from stretching too wide
	}}>
	  <span style={{fontWeight: "bold", fontSize: 25}}>
	      Smooth Particle Hydrodynamics <br/>
	  </span>
      </div>

    </div>
  );
}

const textstyle={
    textDecoration: 'none',
    fontWeight: "bold",
    color: "#82D7F7",
    fontFamily: "Helvetica",
    fontSize: "24px",
    marginLeft: "24px",
    marginRight: "24px",
    textAlign: "center"
}

const textstyle2={
    textDecoration: 'none',
    color: "#82D7F7",
    fontFamily: "Helvetica",
    fontSize: "16px",
    marginLeft: "24px",
    marginRight: "10px"
}
