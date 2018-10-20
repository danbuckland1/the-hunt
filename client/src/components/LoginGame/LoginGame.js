import React from "react";
import { Link } from "react-router-dom";
import "../CreateGame/CreateGame.css";

const LoginGame = props => (
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
);

export default LoginGame;