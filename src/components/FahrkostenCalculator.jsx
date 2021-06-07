import React from 'react'
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { RadioButton } from 'primereact/radiobutton';
import { Card } from 'primereact/card';
import Scooter1 from '../images/scooter1.jpg'
import Scooter2 from '../images/scooter2.jpg'
import Scooter3 from '../images/scooter3.jpg'

export const FahrkostenCalculator = () => {

    const [scooterSelected, setScooterSelected] = React.useState("");

    const [startTime, setStartTime] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [totalTime, setTotalTime] = React.useState(null);

    const [calculatedPrice, setCalculatedPrice] = React.useState(0);

    const [showModalScooterSelection, setShowModalScooterSelection] = React.useState(false);

    var currentTimeAsDate = new Date(currentTime);
    var millis;

    // WIP
    React.useEffect(() => {
        if (startTime !== null && endTime === null) {
            setTimeout(() => setCurrentTime(new Date() - startTime), 1000);
        }
    })
    
    const header = () => {
        return(
            <div>Select A Scooter</div>
        )
    }

    const footer = () => {
        return(
            <div>
                <Button label="Confirm Selection" className="button" onClick={confirmSelection} disabled={scooterSelected===""} />
                <Button label="Clear Selection" className="button" onClick={clearSelection} disabled={scooterSelected===""} />
            </div>
        )
    }

    const confirmSelection = () => {
        setShowModalScooterSelection(false);
    }

    const clearSelection = () => {
        setScooterSelected("");
        setShowModalScooterSelection(false);
    }

    const onHide = () => {
        setShowModalScooterSelection(false);
        setScooterSelected("");
    }

    const cardHeader = (imageURL) => {
        return(
            <div>
                <img alt="Scooter" src={imageURL} width="200" height="200" />
            </div>
        )
    }
    
    const displayCostPerMinute = (scooter) => {

        if (scooter === "Scooter1") return "1€"
        if (scooter === "Scooter2") return "2€"
        if (scooter === "Scooter3") return "3€"

        return ""
    }

    const displayStartTime = () => {
        return startTime.toString();
    }

    const endTrip = () => {
        setEndTime(new Date());
        setTotalTime(currentTime);
    }

    const add5Minutes = () => {

    }

    const newTrip = () => {
        setTotalTime(null);
        setStartTime(null);
        setEndTime(null);
        setCurrentTime(null);
    }

    const startTrip = () => {
        setStartTime(new Date());
        setCurrentTime(0);
        // start = startTime.now();
    }

    return(
        <div className="FahrkostenCalculatorContainer">
            <div>
                <Button label="Select Scooter" className="button" onClick={() => setShowModalScooterSelection(showModalScooterSelection => !showModalScooterSelection)}/>
                <Dialog header={header} visible={showModalScooterSelection} style={{width:"60rem"}} footer={footer} onHide={onHide} draggable={false} closable={false}>
                    <div className="ScooterSelection">
                        <Card className="ScooterSelectionCard" title={cardHeader(Scooter1)} footer={ <div className="centerItems">
                            <label className="ScooterSelectionLabel" htmlFor="scooter1Selection">Scooter 1</label>
                            <RadioButton value="Scooter1" inputId="scooter1Selection" onChange={(e) => setScooterSelected(e.value)} checked={scooterSelected==="Scooter1"} /> </div>}>
                        </Card>
                        <Card className="ScooterSelectionCard" title={cardHeader(Scooter2)} footer={ <div className="centerItems">
                            <label className="ScooterSelectionLabel" htmlFor="scooter2Selection">Scooter 2</label>
                            <RadioButton value="Scooter2" inputId="scooter2Selection" onChange={(e) => setScooterSelected(e.value)} checked={scooterSelected==="Scooter2"} /> </div>}>
                        </Card>
                        <Card className="ScooterSelectionCard" title={cardHeader(Scooter3)} footer={ <div className="centerItems">
                            <label className="ScooterSelectionLabel" htmlFor="scooter3Selection">Scooter 3</label>
                            <RadioButton value="Scooter3" inputId="scooter3Selection" onChange={(e) => setScooterSelected(e.value)} checked={scooterSelected==="Scooter3"} /> </div>}>
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
                {/* WIP */}
                <div className="contentAsTable">
                    <div>
                        Current Trip Length:
                    </div>
                    <div>
                        {currentTime !== null && endTime === null && 
                        // `${(currentTimeAsDate.getHours() - 1) === 0 ? `${currentTimeAsDate.getHours() - 1}:` : ""}
                        // ${currentTimeAsDate.getMinutes() === 0 ? `${currentTimeAsDate.getMinutes()}:` : ""}
                        // ${currentTimeAsDate.getSeconds()}`}
                        Math.floor(currentTime / 1000) }
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
                        {totalTime !== null && Math.floor(totalTime / 1000)}
                    </div>

                </div>
            </div>
            <div className="TripControl">
                {totalTime === null ? 
                <div className="TripButtons">
                    <Button className="p-button-success" label="Start Trip" onClick={startTrip} disabled={startTime !== null || scooterSelected === ""}/>
                    <Button className="p-button-danger" label="End Trip" onClick={endTrip} disabled={startTime === null} />
                    <Button className="button" label="Add 5 Minutes" onClick={add5Minutes} disabled={startTime === null} /> 
                </div> :
                <div>
                    <Button className="p-button-success" label="New Trip" onClick={newTrip} />
                </div>}
            </div>
        </div>
    )

}