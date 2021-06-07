import React, { useEffect, useState, useRef} from 'react';
import { Button } from 'primereact/button';
import { Container } from 'react-bootstrap';



function Fahrkosten () {

    const[startTime, setStarttime] = useState();
    const[endTime, setEndtime] = useState();
    const[dauerInMin, setDauerInMin] = useState(0);
    const[dauerInSec, setDauerInSec] = useState(0);
    const [cost, setCost] = useState(0);
    const[time ,setTime] = useState(() =>new Date().toLocaleTimeString() );
    const[startTime2, setStarttime2] = useState(new Date());
    const[endTime2, setEndtime2] = useState(new Date());
    const[startButtonState, setStartButtonState] = useState(true);
    const[endButtonState, setEndButtonState] = useState(true);
    const[startTripState, setStartTripState] = useState(true);
    const[initialCost, setInitialCost] = useState(0);
    const[singleButtonState, setSingleButtonState] = useState(false);
    var preis = Math.ceil(dauerInMin*cost+ initialCost).toFixed(2);
    
    

    useEffect(()=>{
        setInterval(()=>{
             setTime(new Date().toLocaleTimeString())

         },1000)
     })


    function startTripTime(){
        setStarttime(time)
        setStarttime2(new Date())
        setStartButtonState(true)
        setEndButtonState(false)
        setSingleButtonState(true)
    }
    function addMin(){
        setDauerInMin(dauerInMin+ 5)
        console.log(dauerInMin)
    }

    function endTripTime(){
        setEndtime2(new Date())
        setDauerInSec((Math.abs(endTime2-startTime2)/(1000)));
        setDauerInMin((Math.abs(endTime2-startTime2)/(1000 * 60)));
        setEndtime(time)
        setEndButtonState(true)
        setStartTripState(false)
        console.log(dauerInMin)
        console.log(dauerInSec)
        console.log(startTime2)
        console.log(endTime2)
    }

    function startNewTrip(){
        setStartButtonState(false)
        setStartTripState(true)
        setStarttime()
        setEndtime()
        setDauerInMin(0)
        setDauerInSec(0)
        setSingleButtonState(false)
    }

    function changePriceTo1(){
        setCost(1)
        setStartButtonState(false)
        setInitialCost(1)
    }

    function changePriceTo2(){
        setCost(2)
        setStartButtonState(false)
        setInitialCost(2)
    }

    function changePriceTo3(){
        setCost(3)
        setStartButtonState(false)
        setInitialCost(3)
    }

  
   

    return (
      
        <div className="formbody">
            
                <div className="Scooter1">
                    <input onClick={changePriceTo1} type="radio" id="scooter1" value="style1"  name="scootertype" disabled={singleButtonState} />
                    <label id="scooter1" htmlFor="scooter1">scooter1</label>
                </div>
                <div className="Scooter2">
                    <input onClick={changePriceTo2} type="radio" id="scooter2" value="style2" name="scootertype" disabled={singleButtonState} />
                    <label htmlFor="scooter2">scooter2</label>
                </div>
                <div className="Scooter3">
                    <input onClick={changePriceTo3} type="radio" id="scooter3" value="style3" name="scootertype" disabled={singleButtonState} />
                    <label htmlFor="scooter3">scooter3</label>
                </div>
            
                <div className="clr"></div>
                
                <div className="onebutton">
                    <Button label="Start Trip" icon="pi pi-check" className="p-button-raised p-button-rounded" onClick={startTripTime} disabled={startButtonState}/>
                </div>
                <div className="onebutton">
                    <Button label ="End trip" className="p-button-raised p-button-rounded p-button-success" onClick={endTripTime} disabled={endButtonState} />
                    </div>
                <div className="onebutton">
                    <Button label ="Add 5 Min" className="p-button-raised p-button-rounded" onClick={addMin}></Button>
                </div>
                <div className="onebutton">
                    <Button label ="Start New Trip" className="p-button-raised p-button-rounded p-button-success" onClick={startNewTrip} disabled={startTripState}></Button>
                </div>
                
                
                <div className="clr"></div>

                <div className="information">               
                <h1>Fahrkosten: {preis}€ </h1>

                   {/* <p1>Current time{time}</p1> */}
                   <p id='p1' value='p1'>Start time: {startTime}</p>
                
                
                    <p id='p2'>End time: {endTime}</p>
                

                    <p id='p3'>Trip Time: {dauerInMin.toFixed(0)}:{dauerInSec.toFixed(1)} </p>
                
                
                    <p id='p4'>Cost per Minute: {cost} €</p>
            </div>       
                   
                                      
        </div>
            )
        }



export default Fahrkosten;