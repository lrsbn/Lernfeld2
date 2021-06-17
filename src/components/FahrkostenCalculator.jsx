import React from 'react'
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { RadioButton } from 'primereact/radiobutton';
import { Card } from 'primereact/card';
import Scooter1 from '../images/scooter1.jpg'
import Scooter2 from '../images/shopping.png'
import Scooter3 from '../images/Okai-electric-scooter-es400b-menu_1600x.png'

export const FahrkostenCalculator = () => {

    // variablen (REACT) -> "Getter" und Setter
    const [scooterSelected, setScooterSelected] = React.useState("");
    const [tmpScooterSelected, setTmpScooterSelected] = React.useState("");

    const SCOOTER_1_COST_PER_MINUTE = 0.10;
    const SCOOTER_2_COST_PER_MINUTE = 0.20;
    const SCOOTER_3_COST_PER_MINUTE = 0.30;

    const [startTime, setStartTime] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [totalTime, setTotalTime] = React.useState(null);

    const [showModalScooterSelection, setShowModalScooterSelection] = React.useState(false);

    // Updated die Benutzungszeit jede Sekunde
    React.useEffect(() => {
        if (startTime !== null && endTime === null) {
            setTimeout(() => setCurrentTime(new Date() - startTime), 1000);
        }
    })
    
    // Header der Selektion
    const header = () => {
        return(
            <div className="ScooterSelectionHeader">Select A Scooter</div>
        )
    }

    // Footer der Selektion
    const footer = () => {
        return(
            <div>
                <Button label="Confirm Selection" className="button" onClick={confirmSelection} disabled={tmpScooterSelected===""} />
                <Button label="Clear Selection" className="button" onClick={clearSelection} disabled={tmpScooterSelected===""} />
            </div>
        )
    }

    // Bestätigt die Selektion
    const confirmSelection = () => {
        setShowModalScooterSelection(false);
        setScooterSelected(tmpScooterSelected);
    }

    // Cleared die Selektion (bestätigt und unbestätigt)
    const clearSelection = () => {
        setScooterSelected("");
        setTmpScooterSelected("");
        setShowModalScooterSelection(false);
    }

    // Funktion für das Verhalten wenn auf das (X) oder in den Hintergrund im Selektionsmenü geklickt wird
    const onHide = () => {
        setShowModalScooterSelection(false);
        setTmpScooterSelected("");
    }

    // Header für die Einträge im Selektionsmenü
    const cardHeader = (imageURL) => {
        return(
            <div>
                <img alt="Scooter" src={imageURL} width="200" height="200" />
            </div>
        )
    }
    
    // Erstellung eines Strings für die Kosten pro Minute für jeden Scooter
    const displayCostPerMinute = (scooter) => {

        if (scooter === "Scooter1") return `${SCOOTER_1_COST_PER_MINUTE.toFixed(2)} €`
        if (scooter === "Scooter2") return `${SCOOTER_2_COST_PER_MINUTE.toFixed(2)} €`
        if (scooter === "Scooter3") return `${SCOOTER_3_COST_PER_MINUTE.toFixed(2)} €`

        return ""
    }

    // Beendet die Fahrt
    const endTrip = () => {
        setEndTime(new Date());
        setTotalTime(currentTime);
    }

    // Erstellt einen neuen Trip
    const newTrip = () => {
        setTotalTime(null);
        setStartTime(null);
        setEndTime(null);
        setCurrentTime(null);
    }

    // Startet die Fahrt
    const startTrip = () => {
        setStartTime(new Date());
        setCurrentTime(0);
    }

    // Kalkuliert den Preis nach dem ausgewählten Scooter und der Gesamtzeit
    const calculatePrice = () => {
        var price;
        var cost;

        if (scooterSelected === "Scooter1") cost = SCOOTER_1_COST_PER_MINUTE;
        if (scooterSelected === "Scooter2") cost = SCOOTER_2_COST_PER_MINUTE;
        if (scooterSelected === "Scooter3") cost = SCOOTER_3_COST_PER_MINUTE;

        if (scooterSelected === "") return <div></div>

        price = totalTime / 1000 / 60 * cost;

        return(
            <div>
                {/* Preis wird kalkuliert und auf die letzten beiden Nachkommastellen berechnet */}
                {`${Number.parseFloat(price + 1).toFixed(2)} €`}
            </div>
        )
    }

    // Formatiert die Zeit in ein leserlichen String
    const formatTime = (timeInMillis) => {
        // Zeit wird erst auf eine Stunde berechnet und anschließend gerundet
        var hours   = Math.floor(timeInMillis / 3600);
        // s.o (Minute) + Abzug der Stunden
        var minutes = Math.floor((timeInMillis - (hours * 3600)) / 60);
        // s.o (Sekunde) + Abzug der Stunden und Minuten
        var seconds = timeInMillis - (hours * 3600) - (minutes * 60);

        // Falls die Stunden/Minuten/Sekunden < 10 sind, wird eine "0" vorne drangehängt
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        return hours+':'+minutes+':'+seconds;
    }

    // Rückgabe der Funktion (Funktionale Programmierung (standardmäßig "Klasse" in Objektorientierten Programmiersprachen))
    return(
        <div className="FahrkostenCalculatorContainer">
            <div>
                <Button label="Select Scooter" className="button" onClick={() => { setShowModalScooterSelection(showModalScooterSelection => !showModalScooterSelection); setTmpScooterSelected(scooterSelected)}} disabled={startTime !== null}/>
                <Dialog header={header} visible={showModalScooterSelection} style={{width:"60rem"}} footer={footer} onHide={onHide} draggable={false} closable dismissableMask>
                    <div className="ScooterSelection">
                        <Card className="ScooterSelectionCard" title={cardHeader(Scooter1)} footer={ <div className="centerItems">
                            <label className="ScooterSelectionLabel" htmlFor="scooter1Selection">Scooter 1</label>
                            <RadioButton value="Scooter1" inputId="scooter1Selection" onChange={(e) => setTmpScooterSelected(e.value)} checked={tmpScooterSelected==="Scooter1"} /> </div>}>
                        </Card>
                        <Card className="ScooterSelectionCard" title={cardHeader(Scooter2)} footer={ <div className="centerItems">
                            <label className="ScooterSelectionLabel" htmlFor="scooter2Selection">Scooter 2</label>
                            <RadioButton value="Scooter2" inputId="scooter2Selection" onChange={(e) => setTmpScooterSelected(e.value)} checked={tmpScooterSelected==="Scooter2"} /> </div>}>
                        </Card>
                        <Card className="ScooterSelectionCard" title={cardHeader(Scooter3)} footer={ <div className="centerItems">
                            <label className="ScooterSelectionLabel" htmlFor="scooter3Selection">Scooter 3</label>
                            <RadioButton value="Scooter3" inputId="scooter3Selection" onChange={(e) => setTmpScooterSelected(e.value)} checked={tmpScooterSelected==="Scooter3"} /> </div>}>
                        </Card>
                    </div>
                </Dialog>
            </div>

            <div className="TripManagement">
                {/* HauptContent der Seite */}
                <div className="contentAsTable">
                    <div>
                        Selected Scooter:
                    </div>
                    <div>
                        {scooterSelected === "" ? "No Scooter Selected" : scooterSelected}
                    </div>
                </div>
                <div className="contentAsTable">
                    <div>
                        Cost per Minute:
                    </div>
                    <div>
                        {displayCostPerMinute(scooterSelected)}
                    </div>
                </div>
                <div className="contentAsTable">
                    <div>
                        Start Time:
                    </div>
                    <div>
                        {startTime !== null ? `${startTime.toLocaleDateString('en-US',{weekday: 'long'})}, ${startTime.toTimeString()}` : ""}
                    </div>
                </div>
                <div className="contentAsTable">
                    <div>
                        Current Trip Length:
                    </div>
                    <div>
                        {currentTime !== null && endTime === null && 
                        formatTime(Math.floor(currentTime / 1000))}
                    </div>
                </div>
                <div className="contentAsTable">
                    <div>
                        End Time:
                    </div>
                    <div>
                        {endTime !== null ? `${endTime.toLocaleDateString('en-US',{weekday: 'long'})}, ${endTime.toTimeString()}`: ""}
                    </div>
                </div>
                <div className="contentAsTable">
                    <div>
                        Total Time:
                    </div>
                    <div>
                        {totalTime !== null && formatTime(Math.floor(totalTime / 1000))}
                    </div>
                </div>
                <div className="contentAsTable">
                    <div>
                        Price:
                    </div>
                    <div>
                        <b className="color-lightred">{totalTime !== null && calculatePrice()}</b>
                    </div>
                </div>
            </div>
            <div className="TripControl">
                {totalTime === null ? 
                <div className="TripButtons">
                    <Button className="p-button-success" label="Start Trip" onClick={startTrip} disabled={startTime !== null || scooterSelected === ""}/>
                    <Button className="p-button-danger" label="End Trip" onClick={endTrip} disabled={startTime === null} />
                </div> :
                <div>
                    <Button className="p-button-success" label="New Trip" onClick={newTrip} />
                </div>}
            </div>
        </div>
    )

}