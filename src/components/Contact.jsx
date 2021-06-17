import React from 'react';
import ScooTeqLogo from '../images/ScooTec3.png'

export const Contact = () => {
    return(
        <div className="default-container">
            <div className="default-container-wrapper">
                <div>
                    <img className="rounded-img" src={ScooTeqLogo} alt="ScooTeq Logo" />
                </div>
                <div className="ContactBackground">
                    <div className="contact-header-box">Contact</div>
                    <div>ScooTeq</div>
                    <div>Berufliche Schule ITECH Elbinsel Wilhelmsburg</div>
                    <div>Dratelnstraße 26</div>
                    <div>21109 Hamburg</div>
                    <div>Telefon: 040 428 794 -0</div>
                    <div>Fax: 040 428 794 -450</div>
                    <div>Email: bs14@hibb.hamburg.de</div>
                </div>
            </div>
            <div className="ContactBackground">
                    <div className="contact-header-box">Diese Website wurde erstellt von</div><br/>
                    <div>Shiva</div>
                    <div>Jonah</div>
                    <div>Lasse</div>
                    <div>Lars</div>
                </div>
        </div>
    )
}