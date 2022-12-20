import React from "react";
import "./NavBar.css"


function NavBar () {


    return(
       
        
        <nav className="navbar navbar-light bg-light">
            <div class="container-fluid">
                <div id="contents">
                    {/* <a class="navbar-brand" href=" " style={{color: "#592C7B"}}> */}
                    <img src=" " alt=""></img>
                   <h3 style={{color: "#592C7B"}}>AfyaNet</h3> 
                    {/* </a> */}
                    <a href = " ">About Us</a>
                    <a href = " ">Services</a>
                    <a href = " ">Contact Us</a>
                    <a href = " ">Our Partners</a>
                    </div>
            </div>
        </nav>
    )
}
export default NavBar;