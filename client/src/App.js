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
import LoginGame from "./components/LoginGame";
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
    isLoggedIn: false
  };

  //KE Note: Temporary function that will change isLoggedIn state to true when called on.  We can change this later on.
  handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
    API.createGame();
  };

  render() {
    return (
      <Wrapper>
        <Router>
          <Fragment>
            <Switch>
              {/* Passes along handleLogin function as a prop to CreateGame component */}
              {/* Conditional Route that will route to Game page if logged in or CreateGame page if not logged in */}
              <Route
                path="/game"
                render={props =>
                  this.state.isLoggedIn ? (
                    <Game {...props} action={this.handleLogin} />
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
                    <Redirect to="/game" />
                  ) : (
                    <CreateGame {...props} action={this.handleLogin} />
                  )
                }
              />
              <Route
                exact
                path="/join"
                render={props =>
                  this.state.isLoggedIn ? (
                    <Redirect to="/game" />
                  ) : (
                    <JoinGame {...props} action={this.handleLogin} />
                  )
                }
              />
              <Route
                exact
                path="/login"
                render={props =>
                  this.state.isLoggedIn ? (
                    <Redirect to="/game" />
                  ) : (
                    <LoginGame {...props} action={this.handleLogin} />
                  )
                }
              />
              <Route
                exact
                path="/auth/google"
                render={props => (
                  <GoogleButton {...props} action={this.handleLogin} />
                )}
              />
            </Switch>
          </Fragment>
        </Router>
      </Wrapper>
    );
  }
} //End App component

export default App;
