import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron/Jumbotron";
import "../CreateGame/CreateGame.css";

const JoinGame = props => (
    <Fragment>
        <Jumbotron />
        <div className="Join">
            <h4 className="login-header">Join a Game</h4>
                <label>Game ID:</label>
                <input className="form-control" id="game-id"></input>
                <label>Game Password (Optional):</label>
                <input className="form-control" id="game-pw"></input>
            <br />
            <h4 className="login-header">Create a Team</h4>
                <label>Team Name:</label>
                <input className="form-control" id="team-name"></input>
                <label>Team Password:</label>
                <input className="form-control" id="team-pw"></input>
            <button onClick={props.action} type="button" className="btn btn-success" id="play-btn">Let's Play</button>
            <p className="login-links">
                <Link to="/">Create a Game </Link> 
                or <Link to="/login">Login</Link></p>
        </div>
    </Fragment>
);

export default JoinGame;