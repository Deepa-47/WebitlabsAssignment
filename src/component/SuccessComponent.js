import React from "react";
import img1 from "../Images/c8d3756e-9eff-4bf0-99cb-5cbdb87f573b.png"
import img2 from "../Images/cdabf922-8923-4391-955c-3063daef0703.png"
import img3 from "../Images/0fe276e7-a31c-4c51-a959-2760a9516778.png"
import img4 from "../Images/28dc23a6-45a8-47c0-916b-8a08fae55a7f.png"
import img5 from "../Images/47b98298-0a70-4e21-9814-c1e9fe296b4d.png"
import img6 from "../Images/f72042d0-7f46-4f95-929e-6b6ec27bba92.png"
import img7 from "../Images/40f60d38-45fa-4fbe-a280-af29b8a1b919.png"
import img8 from "../Images/048d5630-e866-4c0f-9cc9-61c39fb3619a.png"
export const SuccessComponent=()=>{
    return(
        <div className="success_container">
            <div className="success_container_head">
                <div className="success_container_text">
                    <h1 className="success_container_title">MEASUREMENT TO OUR SUCCESS</h1>
                    <h5 className="success_container_subtitle">Our process-driven approach keeps us going</h5>
                </div>
            </div>
            <div className="images">
                <div>
                    <img src={img1}/>
                    <p>TRANSPARENCY AND RELIABILITY</p>
                </div>
                <div>
                    <img src={img2}/>
                    <p>REAL TIME PROJECT STATUS</p>
                </div>
                <div>
                    <img src={img3}/>
                    <p>WELL STRUCTURED COMMUNICATION</p>
                </div>
                <div>
                    <img src={img4}/>
                    <p>AGILE METHODOLOGY</p>
                </div>
                <div>
                    <img src={img5}/>
                    <p>ONSITE COLLABORATION</p>
                </div>
                <div>
                    <img src={img6}/>
                    <p>INNOVATION AT WORK</p>
                </div>
                <div>
                    <img src={img7}/>
                    <p>CLIENT'S INVOLVEMENT IN EACH MILESTONE</p>
                </div>
                <div>
                <img src={img8}/>
                    <p>DEDICATED TEAM</p>
                </div>
            </div>
        </div>
    )
}