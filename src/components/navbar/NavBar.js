import React from "react";
import "./NavBar.css"


function NavBar () {


    return(
       
        <nav className="navbar navbar-light bg-light">
            <div class="container-fluid">
                <div id="contents">
                    <a class="navbar-brand" href="" style={{color: "592C7B"}}>
                    <img src="./assests/Logo.png" alt=""  class="d-inline-block align-text-top"/>
                    AfyaNet</a>
                    <a href = "" style={{color: "black"}}>About Us</a>
                    <a href = "">Services</a>
                    <a href = "">Contact Us</a>
                    <a href = "">Our Partners</a>
                    </div>
            </div>
        </nav>
    )
}
export default NavBar;