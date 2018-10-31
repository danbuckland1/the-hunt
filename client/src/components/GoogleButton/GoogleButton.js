import React, { Component, Fragment } from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import "../CreateGame/CreateGame.css";
import API from "../../utils/API";


class GoogleButton extends Component {

    state = {
        teamID: ""
    }

//Function that handles database communication when a team is created
handleCreateTeam = () => {
    //API function that creates a team and associates it with a gameID
    API.createTeam(this.props.gameID)
        //Then takes new team record and sets teamID state to teamID in database
        .then( res => {
            this.setState ({
                teamID: res.data._id
            });
        })
        //Then takes gameID and teamID to add team to a game record
        .then( () => {
            API.insertTeam(this.props.gameID, this.state.teamID)
        })
        //Then moves user to game as logged in
        .then( () => this.handleLogin());
}


    render(){
        return (
            <Fragment>
            <Jumbotron />
            <div className = "btnDiv">
                <button type= "button" className= "btn btn-success" id="google-btn" value={this.props.gameID} onClick={this.props.handleTeamNameCheck}>
                    {/* <a href="http://localhost:8080/auth/google">Login with Google</a> */}
                    Login with Google
                </button>
            </div>
            </Fragment>

        )
    }
  
};

export default GoogleButton;