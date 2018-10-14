import React from "react";
import "./Navbar.css";

const Navbar = props => (

    <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <p>Activity Stream</p>
                </li>
                <li className="nav-item">
                    <p>Leaderboard</p>
                </li>
                <li className="nav-item">
                    <p>Challenges</p>
                </li>
                <li className="nav-item">
                    <p>X</p>
                </li>
            </ul>
        </div>
    </nav>

);

export default Navbar;