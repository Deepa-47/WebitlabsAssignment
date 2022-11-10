import React, { useState } from "react";

export const Header=()=>{
    const [toggle, setToggle]=useState(true);
    //const [toggleClassName, setToggleClassName] = useState()
    const toggler=()=>{
        if(toggle){
            document.querySelector(".nav_list").style.display="none";
            document.querySelector(".right_navbar").style.display="none";
            setToggle(false);
        }else{
            document.querySelector(".nav_list").style.display="flex";
            document.querySelector(".right_navbar").style.display="flex";
            setToggle(true);
        }
    }
    return(
        <div className="header_container">
            <div className="header_navbar">
                <div className="left_navbar">
                    <div className="nav_logo">
                        <div>
                            <h1 className="nav-title">DESIGN</h1>
                            <h1 className="nav-subtitle">AGENCY</h1>
                        </div>
                        <div className="menu_icon">
                            <svg onClick={toggler}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        </div>
                    </div>
                   
                    <div className="nav_list" >
                        <ul>
                            <li>Specialize in</li>
                            <li>Case Study</li>
                            <li>Process</li>
                            <li>Industries</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="right_navbar" >
                    <div className="navbar_buttons">
                        <button className="shedule_button">Shedule a call</button>
                        <button className="hiring_button">We are hiring</button>
                    </div>
                </div>
            </div>
           
            <div className="header_content">
                <div className="header_text">
                    <h1 className="header-title">INNOVATION DIGITAL TECHNOLOGY</h1>
                    <h2 className="header-subtitle">everything we do is the consumer, imagination and you.</h2>
                </div>
            </div>
        </div>
    )
}