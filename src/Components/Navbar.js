import React from "react";
import './Navbar.css'

export default function Navbar() {
    return (
      <div className="Nav__container">
        <img src="Assets/Globe-Icon.png" className="Nav_image"/>
        <h4 className="Nav_heading">My Travel Journal.</h4>
      </div>
    );
}