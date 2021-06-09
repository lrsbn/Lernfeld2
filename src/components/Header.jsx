import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';

export const Header = () => {
    return(
        <div className="header">
            <HashRouter>
            <NavLink className="navbar-brand" to="/">Home</NavLink>
            <NavLink className="navbar-brand" to="/calc">Calculator</NavLink> 
            <NavLink className="navbar-brand" to="/Fahrkosten">Fahrkosten</NavLink> 
            <NavLink className="navbar-brand" to="/fahrkosten_calc">Fahrkosten 2</NavLink>
            </HashRouter>
        </div>
    )
}