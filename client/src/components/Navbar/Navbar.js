import React from "react";
// import { Link, Route } from "react-router-dom";
//custom css
import "./Navbar.css";
// Navbar images
import ActivityIcon from "../../images/icons/activitychat.png";
import LeaderboardIcon from "../../images/icons/leaderboard2.png";
import ChallengesIcon from "../../images/icons/challenges.png";
import LogoutIcon from "../../images/icons/logout.png";
//Pages
// import Challenges from "../../pages/Challenges";


const Navbar = ({ match }) => {
    return (
        <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <img src={ActivityIcon} alt="Activity Stream" className="navIcon"/> 
                    </li>
                    <li className="nav-item">
                        <img src ={LeaderboardIcon} alt="Leaderboard" className="navIcon"/>
                    </li>
                    <li className="nav-item">
                        <img src={ChallengesIcon} alt="" className="navIcon"/>
                    </li>
                    <li className="nav-item">
                    <img src={LogoutIcon} alt="Challenges" className="navIcon"/>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;