import React from "react";
import './GoogleButton.css'

const GoogleButton = () => (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4" id="title">The Hunt</h1>
            <p id="lead">A Scavenger Hunt tool for friends and family!</p>
        </div>
        <div className = "btnDiv">
        <button type= "button" className= "btn btn-success" id="google-btn">
        Login with Google
        </button>
        </div>
    </div>
);

export default GoogleButton;