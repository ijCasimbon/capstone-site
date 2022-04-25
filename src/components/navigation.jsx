import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
  <div className="navigation">
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
    <NavLink className="navbar-brand" to="/">
      GROUP 4 GAME
    </NavLink>
    </div>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link active" to="/">
          Home
        <span className="sr-only">(current)</span>
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/download">
          Download
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">
          How to Play
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/leaderBoard">
          Leader Board
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
      </li>

    </ul>  
  </div>
  </nav>
  </div>
  );
}

export default Navigation;