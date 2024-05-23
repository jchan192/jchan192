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

	      Such a theoretical prediction using computer simulations allows us to test the Cold Dark Matter model against observations. For instance, we can measure the numebr of these haloes, and the inner structure of these haloes that allows us to compare with the galaxies we observed in our local universe.  Wrting your N-body code is quite simple, since we are only numerically solving the Newton's equation, but if you want to perform cosmological N-body simulation out of the box, there are couple public codes available such as Gadget.
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
	  Here is another simulation of a different kind of dark matter model, namely the Wave Dark Matter model. The simulation is performed by numerically solving the Schordinger-Poisson equation, and we can see a resulting gravitationaly bound halo, similar to the N-body simualtion. In fact, the wave-like dynamics are the distinct feature, such as the solitonic core, that differentiates this model from the characteristics observed in Cold Dark Matter simulation. Here the simulation is performed by using the GPU accelerated code <a href="https://github.com/gamer-project/gamer" target="_blank" rel="noopener noreferrer" style={{color: "#82D7F7",textDecoration: 'none'}}> GAMER-2 </a>.  <br/> <br/>

	  Apart from publicly available simulation code, we have also developed our own MPI parallelized Fourier spectral code in C++ to perform simulations. We found a diverse population of Wave Dark Matter halos and compared with previous findings, with results available in <a href="https://academic.oup.com/mnras/article/511/1/943/6505142" target="_blank" rel="noopener noreferrer" style={{color: "#82D7F7",textDecoration: 'none'}}> Chan2023 </a>. Menawhile, comparison between simulation and observational data are the fundamental to testing any Dark Matter theory. We collaborate with galactic archeologist and perform Jeans analysis on observed dwarf galaxies, in order to constraint the Dark Matter particle mass, as detailed in <a href="https://iopscience.iop.org/article/10.3847/2041-8213/abf501" target="_blank" rel="noopener noreferrer" style={{color: "#82D7F7",textDecoration: 'none'}}> Hayashi2021 </a>.
	  </div>

	  <div>
	  <img
	      style={{
//		  marginLeft: "auto",
		  width: "400px",
		  height: "400px",
		  padding: "10px 10px",
		  transform: "scaleX(1.0) scaleY(1.0)" // Adjust these values as needed
	      }}
	      key={contact_2.avatar}
	      src={contact_2.avatar || null}
	  />

	  </div>

      </div>

{/*      <div style={{color: "white", 
		   padding: "10px 30px",		 
		   maxWidth: "900px", // Limit maximum width to prevent text from stretching too wide
	}}>
      	  <span style={{fontWeight: "bold", fontSize: 25}}>
       	      Smooth Particle Hydrodynamics <br/>
       	  </span>
       </div> 
*/}
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

