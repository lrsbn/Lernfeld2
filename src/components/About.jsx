import React from 'react';
import Bild1 from '../images/sunset-boat-lacquer-sky-offer-reflection.jpg';
import { NavLink } from 'react-router-dom';

export const About = () => {
    return(
        <div className="default-container">
            <div className="default-container-wrapper">
                <div>
                    <img className="cover" src={Bild1} alt="Sunset over field"/>

                </div>
                <div className="ContactBackground">
                    <div className="contact-header-box">
                        Über uns
                    </div>
                    <p>
                    Die ScooTeq GmbH ist ein in Hamburg stationiertes Start-Up Unternehmen, welches sich um die Ausstattung verschiedener Großstädte in Deutschland mit E-Scootern kümmert. 
                    Dabei legen wir besonderen Wert auf hohe Qualität und faire Preise, sowie Umweltfreundlichkeit und Nachhaltigkeit.<br/>
                    Unsere E-Scooter werden dabei von zertifizierten Partner hergestellt und gewartet, um Ihnen unsere Versprechen, 
                    sowie ein gutes Gewissen tatsächlich einen Unterschied zu machen, zu gewährleisten.<br/>
                    Unsere Firmenzentrale befindet sich direkt in der Hafencity in Hamburg.<br/><br/>
                    Bei Fragen kommen Sie doch gerne direkt zu uns in der Hafencity mit einem unser E-Scooter, oder rufen sie unter 040 428 794 -0 an.<br/><br/>
                    Euer ScooTeq-Team.<br/><br/>
                    </p>
                    <div className="contact-header-box">
                        Wie haben wir die Anwendung getestet?
                    </div>
                    <p>
                    Da es sich bei dieser Website um ein reines Javascript-Projekt handelt, 
                    standen uns leider keinen standardmäßigen Unit-Tests, wie man sie beispielsweise in Java findet, zur Verfügung.
                    Um dieses Problem zu beseitigen haben wir uns selber Testfälle ausgedacht, und diese <NavLink to="/software_testing">hier</NavLink> formuliert.
                    Alle diese Testfälle wurden meherere Male durchgeführt, um die Anwendung so fehlerfrei wie möglich zu gestalten.
                    </p>
                </div>
            </div>
        </div>
    )
}