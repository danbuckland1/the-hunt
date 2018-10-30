//Dependencies
import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
//Components
import Wrapper from "./components/Wrapper";
//Create/Join/Login form components
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";
//Pages
import Game from "./pages/Game";
//Google Button
import GoogleButton from "./components/GoogleButton";
//CSS file
import "./App.css";
import API from "./utils/API";

class App extends Component {
  //sets state of app to not logged in by default
  //KE Note: This is a temporary setup to test and see that the right page renders when a user is logged in.  We can change the setup as we incorporate authentication
  state = {
    isLoggedIn: false,
    gameName: "",
    gameID: "",
    teamName: "Team1",
    teamID:"",
    redirect: false
  };


  //KE Note: Temporary function that will change isLoggedIn state to true when called on.  We can change this later on.
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

//Function that handles creating a new game.  This gets passed onto CreateGame.js
  handleCreateGame = () => {
    //API call that creates game in database
    API.createGame(this.state.gameName)
      .then( res => {
        //Sets state to gameID from newly created game
        this.setState({
          gameID: res.data._id
        });
      });
  }

  //Function that handles capturing a new game name.  This gets passed onto CreateGame.js
  captureGameName = (event) => {
    let gameName = event.target.value;
    this.setState({
      gameName: gameName
    })
  };

  //Function that handles capturing a typed in game ID. This gets passed onto JoinGame.js
  handleCaptureGameID = (event) => {
    let gameID = event.target.value;
    this.setState({
      gameID: gameID
    })
  }

  //Function that handles joining a game. This is passed to JoinGame.js
  handleJoinGame = () => {
    //Check to see if game exists
    API.pullGame(this.state.gameID)
        .then(res => {
            // console.log(res);
            //If it does...
            if(res) {
              //set redirect state to true
              this.setState({
                redirect: true
              })
                
            }//END of if(res)
            else {
              console.log("Game does not exist.  Please check ID.");
            }
        })
            
  }
  
  //Function that redirects user if redirect state is set to true.  This is passed to JoinGame.js
  handleRedirect = () => {
    if (this.state.redirect){
        return <Redirect to="/auth/google" />
     }
  };

  //Function that handles database communication when a team is created
  handleCreateTeam = (teamName, gameID) => {
  //API function that creates a team and associates it with a gameID
    API.createTeam(teamName, gameID)
      //Then takes new team record and sets teamID state to teamID in database
      .then( res => {
          this.setState ({
              teamID: res.data._id
          });
      })
      //Then takes gameID and teamID to add team to a game record
      .then( () => {
          API.insertTeam(this.state.gameID, this.state.teamID)
      })
      //Then moves user to game as logged in
      .then( () => this.handleLogin());
  }


  //Function that generates team name that doesn't exist yet
  handleTeamNameGeneration= (dbGameID, dbTeamName) => {
    let teamNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //Loop through array of numbers until....
    for (let i=0; i < teamNums.length; i++){
        let teamName = "Team" + teamNums[i];
        console.log(teamName);
        if(this.state.gameID === dbGameID && teamName === dbTeamName){
            console.log(teamName + " already exists.")
        }
        //...You reach a Teamnumber that doesn't yet exist in the database and return that
        else{
            console.log("Adding " + teamName + " to database");
            return teamName;
        }
    }
  }

//Function that checks to see if Team Name exists
  handleTeamNameCheck = () => {
    //Check to see if Team Name with matching game ID exists
    API.pullTeam(this.state.gameID, this.state.teamName)
    .then (res => {
      console.log(res);
      //If it does...
      if(res){
        //Generate a new team name
        let newTeamName = this.handleTeamNameGeneration(res.data.gameID, res.data.teamName);
        //Set teamName state to new team name
        this.setState ({
            teamName: newTeamName
        });
        //Use new team name and game ID to create a new team record
        this.handleCreateTeam(newTeamName, this.state.gameID)
      }
      //If it doesn't...
      else {
        //Create a team using gameID and Team 1
        this.handleCreateTeam(this.state.teamName, this.state.gameID)
      }
    })
  }

  gameID = this.state.gameID

  render(gameID) {
    return (
      <Wrapper>
        <Router>
          <Fragment>
            <Switch>
              {/* Passes along handleLogin function as a prop to CreateGame component */}
              {/* Conditional Route that will route to Game page if logged in or CreateGame page if not logged in */}
              <Route
                path="/game/:gameid"
                render={props =>
                  this.state.isLoggedIn ? (
                    <Game {...props} handleLogin={this.handleLogin} />
                  ) : (
                    <Redirect to="/" />
                  )
                }
              />
              <Route
                exact
                path="/"
                render={props =>
                  this.state.isLoggedIn ? (
                    <Redirect to={`/game/${this.state.gameID}`} />
                  ) : (
                    <CreateGame 
                      {...props}
                      handleCreateGame={this.handleCreateGame}
                      captureGameName={this.captureGameName}
                      />
                  )
                }
              />
              <Route
                exact
                path="/join"
                render={props =>
                  this.state.isLoggedIn ? (
                    <Redirect to={`/game/${this.state.gameID}`} />
                  ) : (
                    <JoinGame 
                    {...props} 
                    handleCaptureGameID={this.handleCaptureGameID}
                    handleJoinGame={this.handleJoinGame}
                    handleRedirect={this.handleRedirect}
                    gameID={this.state.gameID} />
                  )
                }
              />
              />
              <Route
                exact
                path="/auth/google"
                render={props =>
                  this.state.isLoggedIn ? (
                    <Redirect to={`/game/${this.state.gameID}`} />
                  ) : (
                    <GoogleButton 
                      {...props} 
                      gameID={this.state.gameID} 
                      handleLogin={this.handleLogin}
                      handleTeamNameCheck={this.handleTeamNameCheck} />
                  )
                }
              />
            </Switch>
          </Fragment>
        </Router>
      </Wrapper>
    );
  }
} //End App component

export default App;
