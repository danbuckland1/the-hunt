import React from "react";
import { Link } from "react-router-dom";

const LoginGame = props => (
    <div className="Login">
    <h4>Team Login</h4>
    <p>Team Name:</p>
    <p>Team Password:</p>
    <button type="button" className="btn btn-success">Let's Play</button>
    <p>
        <Link to="/">Create </Link> 
        or <Link to="/join">Join</Link> a Game</p>
    </div>
);

export default LoginGame;