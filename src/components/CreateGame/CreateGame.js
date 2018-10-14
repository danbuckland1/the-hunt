import React from "react";
import { Link } from "react-router-dom";

const CreateGame = props => (
    <div className="Create">
        <h4 className="login-header">Create a Game</h4>
            <label>Game Name:</label>
            <input class="form-control" id="game-name"></input>
            <label>Game Password (Optional):</label>
            <input class="form-control" id="game-pw"></input>
        <h4 className="login-header">Create a Team</h4>
            <label>Team Name:</label>
            <input class="form-control" id="team-name"></input>
            <label>Team Password:</label>
            <input class="form-control" id="team-pw"></input>
        <button type="button" className="btn btn-success" id="play-btn">Let's Play</button>
        <p>
            <Link to="/join">Join a Game </Link> 
            or <Link to="/login">Login</Link></p>
    </div>
);

export default CreateGame;
