import React, { useEffect } from 'react';
import './index.sass'

export default function NavBar(){

    const showMenuMobile = () =>{
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return(
        <div className="topnav" id="myTopnav">
            <a className="active">Welcome</a>
            <a href="https://github.com/carlosclatg/myTransfer" target="_blank">See the code</a>
            <a className="icon" onClick={showMenuMobile}>
                <i className="fa fa-bars"></i>
            </a>
        </div>
    )
}