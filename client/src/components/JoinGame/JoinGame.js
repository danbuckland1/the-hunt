import React, { Fragment,Component } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../Jumbotron/Jumbotron";
import "../CreateGame/CreateGame.css";

class JoinGame extends Component {

    //If type ID brings up a result from API.pullgame
        //then Create a Team
        //then Insert team into game record
        //then move user along into the game
    // state = {
    //     teamID: "",
    //     teamName:"",
    //     redirect: false
    // }

    // //Function that checks to see if Team Name already exists in database
    // handleTeamCheck= (dbGameID, dbTeamName) => {
    //     let teamNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //     //Loop through array of numbers until....
    //     for (let i=0; i < teamNums.length; i++){
    //         let teamName = "Team " + teamNums[i];
    //         if(this.props.gameID === dbGameID && teamName === dbTeamName){
    //             // console.log("Match" + [i])
    //         }
    //         //...You reach a Teamnumber that doesn't yet exist in the database and return that
    //         else{
    //             return teamName;
    //         }
    //     }
    // }

// //Do a Teamname and Game ID Check and generate a Team Name that doesn't exist
// API.pullTeam("Team 1")
// .then (res => {
//     let newTeamName = this.handleTeamCheck(res.data.gameID, res.data.teamName);
//     this.setState ({
//         teamName: newTeamName
//     });
// })
// //Then take new Team Name in state and create a new Team with it while also associating proper gameID
// .then (() => {
//     API.createTeam(this.state.teamName, this.props.gameID)
//     //store resulting teamID in state
//     .then( res => {
//         this.setState ({
//             teamID: res.data._id
//         });
//     })
// })
// .then( () => {
//     API.insertTeam(this.props.gameID, this.state.teamID)
// })


    render(){
        return(
            <Fragment>
                <Jumbotron />
                {this.props.handleRedirect()}
                <div className="Join">
                    <h4 className="login-header">Join a Game</h4>
                        <label>Game ID:</label>
                        <input className="form-control" id="game-id" onBlur={this.props.handleCaptureGameID}></input>
                    <br />
                    {/* <Link to='/auth/google'> */}
                    <button onClick={this.props.handleJoinGame} type="button" className="btn btn-success" id="play-btn">Let's Play</button>
                    {/* </Link> */}
                    <p className="login-links">
                        Or <Link to="/">Create a Game </Link> 
                    </p>
                </div>
            </Fragment>
        )
    }
};

export default JoinGame;