import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import { Calc } from './Calc.jsx'

export const Header = () => {
    return(
        <div className="header">
            <HashRouter>
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="/calc">Calculator</NavLink> 
            </HashRouter>
        </div>
    )
}