import React from 'react';

export const SoftwareTesting = () => {
    return(
        <div className="default-container">
            <div className="default-container-wrapper">
                <div className="ContactBackground">
                    <div className="contact-header-box">TripCalc</div>
                    <ol>
                        <br/>
                        <div className="font-large">Scooter Selektion</div>
                        <li>
                            Funktioniert der Button zur Anzeige der E-Scooter-Selektion (Select Scooter)?
                        </li>
                        <li>
                            Kann ein E-Scooter ausgewählt werden?
                        </li>
                        <li>
                            Kann diese Auswahl bestätigt werden (Confirm Selection) (Fenster sollte sich schließen)?
                        </li>
                        <li>
                            Wird die bestätigte Auswahl des Scooters beim erneuten Öffnen der Selektion gespeichert?
                        </li>
                        <li>
                            Kann diese Auswahl geändert werden? (Auswahl und Bestätigung)?
                        </li>
                        <li>
                            Kann diese Auswahl gelöscht werden (Clear Selection)?
                        </li>
                        <li>
                            Kann das Auswahl-Fenster per "X" geschlossen werden, wird die Auswahl nicht gespeichert? (4. Test erneut ausführen)
                        </li>
                    </ol>
                    <ol>
                        <br/>
                        <div className="font-large">Berechnungen der Fahrt</div>
                        <li>
                            Wird der richtige Scooter angezeigt?
                        </li>
                        <li>
                            Wird der richtige Preis pro Minute für den jeweiligen Scooter angezeigt?
                        </li>
                        <li>
                            Funktioniert der Start-Knopf (Start Trip)? (falls ein Scooter ausgewählt ist)
                        </li>
                        <li>
                            Wird die richtige Startzeit angezeigt?
                        </li>
                        <li>
                            Wird die richtige Benutzungszeit angezeigt?
                        </li>
                    </ol>

                </div>
            </div>
        </div>
    )
}