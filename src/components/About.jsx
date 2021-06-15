import React from 'react';
import Bild1 from '../images/fb-natur.jpg'
import Bild1_2 from '../images/sunset-boat-lacquer-sky-offer-reflection.jpg';

export const About = () => {
    return(
        <div className="default-container">
            <div className="default-container-wrapper">
                <div className="cover">
                    <img className="cover" src={Bild1_2} alt="Sunset over field"/>

                </div>
                <div>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </div>
            </div>
        </div>
    )
}