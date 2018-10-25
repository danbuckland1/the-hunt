import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
//custom css
import "./Navbar.css";
// Navbar images
import ActivityIcon from "../../images/icons/activitychat.png";
import LeaderboardIcon from "../../images/icons/leaderboard2.png";
import ChallengesIcon from "../../images/icons/challenges.png";
import LogoutIcon from "../../images/icons/logout.png";


class Navbar extends Component{
    componentDidMount = (match) => {
        console.log(this.props.match.url);
    }
    render(){
        return(
            <Fragment>

            <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to={ `${this.props.match.url}` } >
                            <img src={ActivityIcon} alt="Activity Stream" className="navIcon"/> 
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ `${this.props.match.url}/board` } >
                            <img src ={LeaderboardIcon} alt="Leaderboard" className="navIcon"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ `${this.props.match.url}/challenges` } >
                            <img src={ChallengesIcon} alt="Challenges" className="navIcon"/>
                        </Link>
                    </li>
                    <li className="nav-item">
                            <img src={LogoutIcon} alt="Challenges" className="navIcon"/>
                    </li>
                </ul>
            </div>
        </nav>
        </Fragment>
        )
    }

}

export default Navbar;