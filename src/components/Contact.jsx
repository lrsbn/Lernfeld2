import React from 'react';
import ScooTecLogo from '../images/ScooTec3.png'

export const Contact = () => {
    return(
        <div className="default-container">
            <div className="default-container-wrapper">
                <div>
                    <img className="rounded-img" src={ScooTecLogo} alt="ScooTec Logo" />
                </div>
                <div className="ContactBackground">
                    <div className="contact-header-box">Contact</div>
                    <div>ScooTec</div>
                    <div>Berufliche Schule ITECH Elbinsel Wilhelmsburg</div>
                    <div>Dratelnstraße 26</div>
                    <div>21109 Hamburg</div>
                    <div>Telefon: 040 428 794 -0</div>
                    <div>Fax: 040 428 794 -450</div>
                    <div>Email: bs14@hibb.hamburg.de</div>
                </div>
            </div>
        </div>
    )
}