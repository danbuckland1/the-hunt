import React from "react";
import { Link } from "react-router-dom";

const JoinGame = props => (
    <div className="Join">
        <h4 className="login-header">Join a Game</h4>
            <label>Game ID:</label>
            <input className="form-control" id="game-id"></input>
            <label>Game Password (Optional):</label>
            <input className="form-control" id="game-pw"></input>
        <h4 className="login-header">Create a Team</h4>
            <label>Team Name:</label>
            <input className="form-control" id="team-name"></input>
            <label>Team Password:</label>
            <input className="form-control" id="team-pw"></input>
        <button type="button" className="btn btn-success" id="play-btn">Let's Play</button>
        <p>
            <Link to="/">Create a Game </Link> 
            or <Link to="/login">Login</Link></p>
    </div>
);

export default JoinGame;