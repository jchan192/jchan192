import {Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Root() {

    const [color, changeColor] = useState("#282c34");
    const contact = {
	avatar: "https://www.astr.tohoku.ac.jp/~jchan/fdmhalo533.png",
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
//		   alignItems: "center",
//		   justifyContent:"center",
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
	      This is <span style={{color: '#82D7F7'}}>Jowett</span> Chan. I am currently a postdoc fellow of the theoretical and astrophysical group at the National Center for Theoretical Sciences (NCTS), which locates at the National Taiwan University.
	      My research interest focuses on simulation of physics, more specifically Cold/Fuzzy Dark Matter simulations, by numerically solving differential equations. 
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
