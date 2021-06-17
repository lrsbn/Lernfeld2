import React from 'react';
import HappyScooterCouple from '../images/e-scooter-happy.jpg';
import { NavLink } from 'react-router-dom';

export const Home = () => {
    return(
        <div className="default-container">
            <div className="default-container-wrapper">
                <div>
                    <img className="cover-left" src={HappyScooterCouple} alt="Happy Couple on an E-Scooter"/>
                </div>
                <div className="ContactBackground">
                    <p className="block-style">
                        Die ScooTeq GmbH hat es sich zu Aufgabe gemacht, E-Scooter in allen deutschen Großstädten zu fördern.
                        Dieses Ziel wollen wir erreichen, indem wir unser Geschäftsmodell um faire Preise herumgestalten.
                        Nachhaltigkeit und Umweltfreundlichkeit wird bei uns großgeschrieben.<br/><br/>
                        Lesen Sie mehr unter <NavLink to="/about">About</NavLink>.<br/><br/>
                        Auf dieser Website finden Sie einen Preisrechner für alle von uns zur Verfügung gestellten Modelle.
                        Starten Sie diesen einfach, wenn sie anfangen einen E-Scooter von uns zu benutzen, und stoppen Sie ihn dann, wenn Sie aufhören,
                        ganz bequem vom Handy aus, aber auch vom Laptop oder Desktop PC möglich.<br/><br/>
                        Bei weiteren Fragen wenden Sie sich doch gerne an unser Team.<br/><br/>
                        Eine schöne Fahrt wünscht Ihnen,<br/>
                        IHRE SCOOTEQ.<br/><br/><br/>
                        PS: Alle Bilder auf dieser Website sind weder von uns aufgenommen, noch besitzen wir die Rechte an diesem Bild.
                        Es handelt sich bei diesem Projekt lediglich um ein Schulprojekt und es wird durch diese Website kein Geld verdient.
                    </p>
                </div>
            </div>
        </div>
    )
}