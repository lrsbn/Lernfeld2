import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

export const Calc = () => {

    const [value1, setValue1] = React.useState(0);
    const [selectedTax, setSelectedTax] = React.useState(19);

    const calcHandler = (e) => {
        e.preventDefault();
        console.log(value1);
        alert("A Value: " + value1);
    }

    const taxes = [
        19,
        16,
    ]

    return(
        <div className="centered">
            {/* <InputText />
            <InputText />
            <span>Calculator</span> */}
            <form onSubmit={calcHandler}>
            <div className="">
                <label htmlFor="firstname3" className="p-col-fixed" style={{width:'100px'}}>Firstname</label>
                <div className="p-col">
                    <InputText id="firstname3" type="number" onChange={(e) => setValue1(e.target.value)} value={value1} style={{width: "200px"}}/>
                </div>
            </div>
            <div className="">
                <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Lastname</label>
                <div className="p-col">
                    <InputText id="lastname3" type="text" readOnly style={{width: "200px"}}/>
                </div>
            </div>
            <div className="">
                <label htmlFor="lastname3" className="p-col-fixed" style={{width:'100px'}}>Steuer</label>
                <div className="p-col">
                    <Dropdown options={taxes} style={{width: "200px"}} value={selectedTax} onChange={(e) => setSelectedTax(e.target.value)}/>
                </div>
            </div>
            <div className="">
                <div className="p-col-fixed" style={{width: "100px"}}>
                </div>
                <div className="p-col">
                    <Button type="submit" label="Submit" />
                </div>
            </div>
            </form>
        </div>
    )
}

const calculate = (price) => {

    const TAX = 19; // in Prozent

    return price*TAX

}