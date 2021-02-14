import React, { Component } from "react";
import "./EmailTemplate.css";
// import IMC_MaaS_Horiz_RGB from "../../../public/IMC_MaaS_Horiz_RGB.png";

class EmailTemplate extends Component{
    render(){
        return(
            <div className = "main-container">
                <div className = "template-container">
                    <div className = "logo-container">
                        <img src = {process.env.PUBLIC_URL + '/IMC_MaaS_Horiz_RGB.png'} alt = "IMC_MaaS_Horiz_RGB" className = "logo"/>
                    </div>
                    <div className = "banner-container">
                        <span>Join the only cloud partner that’s Microsoft Azure Expert MSP-Certified</span>
                        <button className = "banner-btn">Start profiting now</button>
                        <img src = {process.env.PUBLIC_URL + '/banner.png'} alt = "banner" className = "banner"/>
                    </div>
                    <div className = "left-image-container">
                        <h3>Ready to dominate in cloud?</h3>
                        <div className = "left-image-content">
                            <img src = {process.env.PUBLIC_URL + '/Left_Img.jpg'} alt = "Left_Img" className = "left-image"/>
                            <div>
                            <p>
                            If you want to sell more SaaS & IaaS services to more of your customers, make sure you have Ingram Micro Cloud by your side. As a Microsoft Azure Expert Managed Service Provider (MSP), we know what it takes for you to get to the top—and stay there.
                            </p>
                            <button>Become a partner</button>
                            </div>
                        </div>
                    </div>
                    <div className = "rigth-image-container">
                        <div>
                            <h5>Partner with the Azure experts.</h5>
                            <p>With our recent certification, Ingram Micro Cloud is all-in on Azure. Work with us to build your Azure technical competencies, join elite partner programs, access free migration services, and leverage the comprehensive marketing and sales resources you need to do more for your customers. Next stop? The world</p>
                            <button>Become a partner</button>
                        </div>
                        <img src = {process.env.PUBLIC_URL + '/Right_Img.jpg'} alt = "Right_Img" className = "right-image"/>
                    </div>
                    <div className = "footer-container">
                        <div>
                            <img src = {process.env.PUBLIC_URL + '/Footer_Fb.png'} alt = "Footer_Fb" className = "footer-images"/>
                            <img src = {process.env.PUBLIC_URL + '/Footer_Twitter.png'} alt = "Footer_Twitter" className = "footer-images"/>
                            <img src = {process.env.PUBLIC_URL + '/Footer_Linkedin.png'} alt = "Footer_Linkedin" className = "footer-images"/>
                        </div>
                        <div className = "footer-content">Privacy statement  |   Terms of service    |   Unsubscribe</div>
                        <div>3351 Michelson Drive, Sulte 100</div>
                        <div>Irvin, CA 92612, United States</div>
                        <div className = "footer-content">Copyright © 2020 Ingram Micro Inc. All rights reserved.</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmailTemplate;