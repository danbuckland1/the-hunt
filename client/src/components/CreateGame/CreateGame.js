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
                <Link to='/auth/google'> <button type="button" className="btn btn-success" id="play-btn">Let's Play </button></Link>
            
            <p className="login-links">
                {/* Or <Link to="/game"> Join a Game </Link> */}
                Or <Link to="/api/user">Join a Game</Link>
                
            </p>
        </div>
    </Fragment>
);

export default CreateGame;
