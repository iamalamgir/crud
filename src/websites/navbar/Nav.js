import React from "react";
import './Nav.css'

export function Navbar() {
    return (
        <div className="navbar">
            <button id="home">Home</button>
            <button>About</button>
            <button>Work</button>
            <button>Link</button>
            <button>Contact</button>
        </div>
    );
}

export default Navbar;
