import React, { Fragment,Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron/Jumbotron";
import "../CreateGame/CreateGame.css";

class JoinGame extends Component {


    render(){
        return(
            <Fragment>
                <Jumbotron />
                <div className="Join">
                    <h4 className="login-header">Join a Game</h4>
                        <label>Game ID:</label>
                        <input className="form-control" id="game-id" onBlur={this.props.handleCaptureGameID}></input>
                    <br />
                    <button onClick={this.props.handleJoinGame} type="button" className="btn btn-success" id="play-btn">Let's Play</button>
                    <p className="login-links">
                        Or <Link to="/">Create a Game </Link> 
                    </p>
                </div>
            </Fragment>
        )
    }
};

export default JoinGame;