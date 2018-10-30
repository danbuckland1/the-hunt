import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron/Jumbotron";
import "../CreateGame/CreateGame.css";

const LoginGame = props => (
    <Fragment>
        <Jumbotron />
        <div className="Login">
            <h4 className="login-header">Team Login</h4>
                <label>Team Name:</label>
                <input className="form-control" id="team-name"></input>
                <label>Team Password:</label>
                <input className="form-control" id="team-pw"></input>
            <button onClick={props.action} type="button" className="btn btn-success" id="play-btn">Let's Play</button>
            <p className="login-links">
                <Link to="/">Create </Link> 
                or <Link to="/join">Join</Link> a Game</p>
        </div>
    </Fragment>
);

export default LoginGame;