import React from "react";
import contactPagePicture from "../../../static/assets/images/auth/contact.jpg";

export default function() {
    return (
    <div className="content-page-wrapper"> 
    <div className="left-column"
    style={{
        background:"url(" + contactPagePicture + ") no-repeat",
        backgroundSize: "cover", 
        backgroundPosition: "center"
    }}></div>
    <div className="right-column">
        <div className="contact-bullet-points">
            <div className="bullet-point-group">
                <div className="icon">
                    <div className="text">616117895</div>
                    </div>
                    
                    </div>    

                    <div className="bullet-point-group">
                <div className="icon">
                    <div className="text">pablolinares935@gmail.com</div>
                    </div>
                    
                    </div>    

                    <div className="bullet-point-group">
                <div className="icon">
                    <div className="text">Madrid, Comunidad de Madrid</div>
                    </div>
                    
                    </div>    
        </div>
    </div>    
    </div>
    );
}