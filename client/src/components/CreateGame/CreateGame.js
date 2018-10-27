import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron/Jumbotron";
import "./CreateGame.css";


const CreateGame = props => (
    <Fragment>
        <Jumbotron />
        <div className="Create">
            <h4 className="login-header">Create a Game</h4>
                <label>Game Name:</label>
                <input className="form-control" id="game-name"></input>
            <button onClick={props.action} type="button" className="btn btn-success" id="play-btn">Let's Play</button>
            
            <p className="login-links">
                Or <Link to="/join"> Join a Game </Link>
            </p>
        </div>
    </Fragment>
);

export default CreateGame;
