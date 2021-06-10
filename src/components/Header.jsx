import React from "react";
import { HashRouter, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <HashRouter>
          <NavLink className="navbar-brand" to="/">
            WECONNECT
          </NavLink>
          <NavLink className="navbar-link" to="/calc">
            Calculator
          </NavLink>
          <NavLink className="navbar-link" to="/Fahrkosten">
            Fahrkosten
          </NavLink>
          <NavLink className="navbar-link" to="/fahrkosten_calc">
            Fahrkosten 2
          </NavLink>
        </HashRouter>
      </div>
    </div>
  );
};
