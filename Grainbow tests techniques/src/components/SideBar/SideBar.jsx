import React from "react";
import logo from "../../assets/logo.png";

function SideBar({ setSelectedComponent }) {
  return (
    <>
      <nav>
        <img src={logo} className="logo" alt="Logo" />
        <ul>
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
