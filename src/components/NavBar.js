import React from "react";

import "../css/NavBar.css";

const NavBar = props => (
    <nav className="navbar">
        <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li>Click an image to begin!</li>

            <li>Score: {props.currentScore} | Top Score: {props.topScore}</li>
            <li>{props.rightWrong}</li>
        </ul>
    </nav>



);

export default NavBar;