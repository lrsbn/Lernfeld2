import React from "react";
import { HashRouter, NavLink } from "react-router-dom";
// import Logo from '../images/imageedit_2_8529298972.png';
import Logo from '../images/unknown.png';

export const Header = () => {
  return (
    <HashRouter>
      <div class="header">
        {/* <NavLink to="/" className="logo">WeConnect</NavLink> */}
        <NavLink to="/" className=""><img style={{borderRadius: "5px", padding: "0px"}} src={Logo} height="30"/></NavLink>
        <div class="header-right">
          <NavLink to="/trip_calc">TripCalc</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </HashRouter>

  )
}
