import {Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


function BulletPoint() {
    const style = {
        fontSize: '20px' // Adjust the size as needed, for example, '24px'
    };

//    return <span className="bullet">{'\u2B24'}</span>; // Using a different bullet character as an example
    return <span className="bullet" style={style}>{'\u2022'}</span>; // Using a different bullet character as an example
}
export default function Root() {

    const [color, changeColor] = useState("#282c34");
    const contact = {
	avatar: "https://www.astr.tohoku.ac.jp/~jchan/myface.png",
	favorite: true,
    };
    document.body.style.backgroundColor= color; 
   
const location = useLocation()
const navigate = useNavigate()
console.log(location)

useEffect(()=> {
    if (location.pathname === '/') {
	navigate('/home')
}
}, [])


  return (
    <>
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

      <div style={{display: "flex", 
		  transform: "scaleX(1.2) scaleY(1.0)", // Adjust these values as needed
		   maxWidth: "400px", // Limit maximum width to prevent text from stretching too wide
		   padding: "40px",}}>
        <img style={{width: "300px",height: "300px"}}
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>


      <div style={{color: "white", 
//		   justifyContent:'center', 
//		   alignItems:'center', 
//		   height: '100vh'
//		   display: "flex", 
//		   textAlign: "center",
//		   flexDirection: "column", // Ensure text wraps vertically on smaller screens
//		   alignItems: "center",
		   padding: "0px 30px",		 
//		   width: 1000
		   maxWidth: "900px", // Limit maximum width to prevent text from stretching too wide
	}}>
	  <p>
	      This is <span style={{color: '#82D7F7'}}>Jowett</span> Chan. I am currently a postdoc fellow of <a href="https://nctstca.github.io" target="_blank" rel="noopener noreferrer" style={{color: "#82D7F7",textDecoration: 'none'}}>the theoretical and astrophysical group at the National Center for Theoretical Sciences (NCTS)</a>, located at the National Taiwan University.
	      My research interest focuses on simulation of physics, more specifically Cold/Fuzzy Dark Matter simulations, by numerically solving differential equations. We are currently performing simulation of a Milky-way sized Fuzzy Dark Matter halo using a recently improved numerical scheme implemetned in a GPU accelerated <a href="https://github.com/gamer-project/gamer" target="_blank" rel="noopener noreferrer" style={{color: "#82D7F7",textDecoration: 'none'}}> GAMER-2 </a>.
	  </p>

	  <p>
              During my graduate coruse at the  <a href="https://www.astr.tohoku.ac.jp/en/" target="_blank" rel="noopener noreferrer" style={{color: "#82D7F7",textDecoration: 'none'}}>Astronomical Institute of Tohoku University</a>, my research theme focused on the structure formation of Dark Matter under the supervision of Prof. Masashi Chiba. At that time, I independently developed a MPI parallel cosmological Fuzzy Dark Matter simulation code based on the Fourier spectral method in C++, leading to a publication. 
	  </p>
      </div>

      <div style={{color: "white", 
		   padding: "30px",		 
		   fontFamily: "Times New Roman",
	}}>
	  <span style={{fontWeight: "bold", fontSize: 25}}>
	      Publications: <br/>
	  </span>
	  Hei Yin Jowett Chan, Elisa G. M. Ferreira, Simon May, Kohei Hayashi & Masashi Chiba. 2022, MNRAS, 511, 943. <br/>
	  Hayashi Kohei, Elisa G. M. Ferreira, Hei Yin Jowett Chan, 2021, ApJL, 912, L3. <br/>
	  Hei Yin Jowett Chan, Masashi Chiba & Tamoaki Ishiyama. 2019, MNRAS, 490, 2405
      </div>

      <div style={{color: "white", 
		   padding: "30px",		 
		   fontFamily: "Times New Roman",
	}}>
	  <span style={{fontWeight: "bold", fontSize: 25}}>
	      Scientific Talks: <br/>
	  </span>

	  
	  <p><BulletPoint /> Astro Lunch Seminar 2024 (Kavli IPMU, Japan)<br/>
	  &nbsp; "Zoom-in Fuzzy Dark Matter Simulation of a Milky Way-sized Halo"</p>

	  <p><BulletPoint /> GA Workshop 2024 (Matsushima, Japan)<br/>
	  &nbsp; "Zoom-in Fuzzy Dark Matter Simulation of a Milky Way-sized Halo"</p>

	  <p><BulletPoint /> Taipei Astronomy Workshop 2024 (NTU, Taiwan)<br/>
	  &nbsp; "A Local Spectral Method for the Fuzzy Dark Matter Simulation"</p>

	  <p><BulletPoint /> NCTS Annual Theory Meeting 2023 (NTU, Taiwan)<br/>
	  &nbsp; "The diverse core-halo structure the scalar field dark matter"</p>
	  
	  <p><BulletPoint /> Cosmology group meeting 2022 (University of Michigan, USA) <br/>
	  &nbsp; "Simulating the core-halo structure of the Fuzzy Dark Matter model"</p>

	  <p><BulletPoint /> VII Scalar Field Dark Matter Workshop 2022 (Guanajuato, México)<br/>
	  &nbsp; "The Present and Future of Scalar Field Dark Matter Simulation"</p>

	  <p><BulletPoint /> ”What is dark matter? - Comprehensive study of the huge discovery space in dark matter” 2022 (Kavli IPMU, Japan)<br/>
	  &nbsp; "Simulation of Fuzzy Dark Matter”</p>

	  <p><BulletPoint /> Workshop on Very Light Dark Matter 2021 (Kavli IPMU, Japan)<br/>
	  &nbsp; "Revisiting the core-halo structure of Fuzzy Dark Matter Halo"</p>

	  <p><BulletPoint /> MPA Cosmology Seminar 2021 (Max Planck Institut für Astrophysik, Germany) - Invited<br/>
	  &nbsp; "The core-halo mass relation of isolated fuzzy dark matter haloes"</p>

	  <p><BulletPoint /> The first Shanghai Assembly on Cosmology and Galaxy Formation 2019 (Shanghai Jiao Tong University, China)<br/>
	  &nbsp; "New Insight into the Void-in-Cloud Process"</p>
      </div>

      <div style={{color: "white", 
		   padding: "30px",		 
		   fontFamily: "Times New Roman",
	}}>
	  <span style={{fontWeight: "bold", fontSize: 25}}>
	      Contacts: <br/>
	  </span>

	 jchan@ncts.phys.ntu.edu.tw
	  <br/>
	 Room 427, Cosmology Building, National Taiwan University,  No. 1, Sec. 4, Roosevelt Rd., Taipei City 106, Taiwan

	 </div>

      <div id="detail">
	  <Outlet />
      </div>
    </>
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

const textstyle3={
    textDecoration: 'none',
    color: "#82D7F7",
    fontFamily: "Helvetica",
    fontSize: "12px",
    marginLeft: "550px"    
}

const liststyle={
  listStyleType:'none'
}
