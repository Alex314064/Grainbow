import React from "react";
import logo from "../assets/logo.png";

function SideBar({ setSelectedComponent }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={logo} className="logo" alt="Logo" />
          </li>
          <li
            className="nav-item"
            onClick={() => setSelectedComponent("farmers")}
          >
            Agriculteurs
          </li>
          <li
            className="nav-item"
            onClick={() => setSelectedComponent("cereals")}
          >
            Céréales
          </li>
          <li
            className="nav-item"
            onClick={() => setSelectedComponent("contributions")}
          >
            Apports
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
