import React from "react";
import img1 from "../Images/1707f48d-fcef-4d02-9c24-0cf090dc7ee6.png";
import img2 from "../Images/d5fc7073-3a92-4efd-983d-e8620098e3f6.png";
import img3 from "../Images/79cbe41b-6ddd-447a-925b-ae5558d7f59b.png";
import img4 from "../Images/79cbe41b-6ddd-447a-925b-ae5558d7f59b.png";
import img5 from "../Images/dd44f3da-9579-4482-a3bd-c010b5ca0503.png";
import img6 from "../Images/221d54ff-07fd-4647-99bb-9a0adff8122f.png";
import img7 from "../Images/def19843-9ea2-48aa-a480-21954a57d2ad.png";
import img8 from "../Images/d90174c6-3bd2-4fda-b2e7-0b202a8c9c88.png";
import img9 from "../Images/4f84ac06-4924-4e94-b665-d0890b3f70e1.png";

export const IndustriesComponent=()=>{
    return(
        <div className="industries_container">
            <div className="industries_container_title">
                <h1>WE ARE WORKING WITH THESE INDUSTRIES</h1>
            </div>
            <div className="industries_images">
                <div>
                    <img src={img1}/>
                    <p>MEDIA & ENTERTAINMENT</p>
                </div>
                <div>
                    <img src={img2}/>
                    <p>HEALTH CARE & WELLNESS</p>
                </div>
                <div>
                    <img src={img3}/>
                    <p>HOSPITALITY & REAL ESTATE</p>
                </div>
                <div>
                    <img src={img4}/>
                    <p>RETAIL & E COMMERCE</p>
                </div>
                <div>
                    <img src={img5}/>
                    <p>EDUCATION & LEARNING</p>
                </div>
                <div>
                    <img src={img6}/>
                    <p>TRAVEL & TRANSPORT</p>
                </div>
                <div>
                    <img src={img7}/>
                    <p>MOBILE & TELECOM</p>
                </div>
                <div>
                    <img src={img8}/>
                    <p>IT & ITES</p>
                </div>
                <div>
                    <img src={img9}/>
                    <p>AGRITECH</p>
                </div>

            </div>
        </div>
    )
}