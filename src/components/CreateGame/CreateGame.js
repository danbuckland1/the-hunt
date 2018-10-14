import React from "react";
import { Link } from "react-router-dom";

const CreateGame = props => (
    <div className="Create">
    <h4>Create a Game</h4>
    <p>Game Name:</p>
    <p>Game Password (Optional):</p>
    <h4>Create a Team</h4>
    <p>Team Name:</p>
    <p>Team Password:</p>
    <button type="button" className="btn btn-success">Let's Play</button>
    <p>
        <Link to="/join">Join a Game </Link> 
        or <Link to="/login">Login</Link></p>
    </div>
);

export default CreateGame;
