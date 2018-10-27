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
            <br />
            <button onClick={props.action} type="button" className="btn btn-success" id="play-btn">Let's Play</button>
            <p className="login-links">
                Or <Link to="/">Create a Game </Link> 
            </p>
        </div>
    </Fragment>
);

export default JoinGame;