import React, { useEffect } from 'react';
import './index.sass'

export default function NavBar(){
    return(
        <div class="topnav" id="myTopnav">
            <a class="active">Welcome</a>
            <a href="https://github.com/carlosclatg/myTransfer" target="_blank">See the code</a>
            <a class="icon">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    )
}