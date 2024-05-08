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
	      <Link to={`/contacts`} style={textstyle}> Publications/Talks</Link>
	      <Link to={`/about`} style={textstyle2}>   Simulations</Link>
	  </div>

      </div>

      <div style={{color: "white", 
		   display: "flex", 
		   alignItems: "center",
		   justifyContent:"center",
		  padding: "30px 400px",
	}}> 
<p>
	      This is the homepage of <span style={{color: '#82D7F7'}}>Jowett</span> Chan Hei Yin. I am currently a postdoc fellow of the theoretical and astrophysical group at the National Center for Theoretical Sciences (NCTS), which locates at the National Taiwan University.
	      <br/> 
	      <br/>
	      My research interest focuses on simulation of Dark Matter, more specifically Fuzzy Dark Matter, while verifying it through comparing simulated haloes with observed dwarf galaxies in the local Universe. Below is an example of a Fuzzy Dark Matter halo.
</p>
	  </div>

	<div style={{display: "flex", 
		   alignItems: "center",
		   justifyContent:"center",
		  padding: "5px 400px",}}>
        <img style={{width: "300px",height: "300px"}}
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>


      <div style={{color: "white", 
		   display: "flex", 
		   alignItems: "center",
		   justifyContent:"center",
		  padding: "25px 200px",
		   fontFamily: "Times New Roman",
	}}>
	  jchan@ncts.phys.ntu.edu.tw
	 </div>

      <div style={{color: "white", 
		   display: "flex", 
		   alignItems: "center",
		   justifyContent:"center",
		  padding: "0px 200px",
		   fontFamily: "Times New Roman",
		   marginTop: "-20px"
	}}>
	 Room 427, Cosmology Building, National Taiwan University,  No. 1, Sec. 4, Roosevelt Rd., Taipei City 106, Taiwan  can i ad somehting ehrere
	 </div>
      <div id="detail">
	  <Outlet />
      </div>
    </>
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
