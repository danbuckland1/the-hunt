import React, { Component, Fragment } from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import "../CreateGame/CreateGame.css";


class GoogleButton extends Component {

    state = {
        teamID: ""
    }

//Function that handles database communication when a team is created


    render(){
        return (
            <Fragment>
            <Jumbotron />
            <div className = "btnDiv">
                <a href="http://localhost:3001/auth/google/">
                <button type= "button" className= "btn btn-success" id="google-btn" value={this.props.gameID} onClick={this.props.handleGoogleCreate}>
                    Login with Google
                </button>
                </a>
            </div>
            </Fragment>

        )
    }
  
};

export default GoogleButton;