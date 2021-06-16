import React from "react";
import { HashRouter, NavLink } from "react-router-dom";
import Logo from '../images/unknown.png';

export const Header = () => {
  return (
    <HashRouter>
      <div class="header">
        <NavLink to="/" className=""><img className="header-img" src={Logo} alt="ScooTeq Logo"/></NavLink>
        <div class="header-right">
          <NavLink to="/trip_calc">TripCalc</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </HashRouter>

  )
}
