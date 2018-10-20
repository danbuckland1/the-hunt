//Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Wrapper from "./components/Wrapper";
import Activity from "./pages/Activity";
import Jumbotron from "./components/Jumbotron";
//Create/Join/Login form components
import CreateGame from "./components/CreateGame";
import JoinGame from "./components/JoinGame";
import LoginGame from "./components/LoginGame";
//Google Button
import GoogleButton from "./components/GoogleButton";
//CSS file
import './App.css';




class App extends Component {
    //sets state of app to not logged in by default
    //KE Note: This is a temporary setup to test and see that the right page renders when a user is logged in.  We can change the setup as we incorporate authentication
    state = {
      isLoggedIn: false
  }

  //KE Note: Temporary function that will change isLoggedIn state to true when called on.  We can change this later on.
   handleLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  }


  render() {
    //Conditional rendering
    //If state is logged in then render the Activity Stream page
    if(this.state.isLoggedIn){
      return (
        <Wrapper>
          <Activity />
        </Wrapper>
      );

    }
    //If state is NOT logged in then render homepage (with the logins)
    else {
      return (
        <Wrapper>
        <Jumbotron />
        <Router>
          <div className="dynamicForm">
          {/* Passes along handleLogin function as a prop to CreateGame component */}
          <Route exact path="/" render = {() => <CreateGame action={this.handleLogin}/> }/>
          <Route exact path="/join" render = {() => <JoinGame action={this.handleLogin}/> }/>
          <Route exact path="/login" render = {() => <LoginGame action={this.handleLogin}/> }/>
          <Route exact path="/auth/google" render = {() => <GoogleButton action={this.handleauth}/> }/>
          </div>
        </Router>
        </Wrapper>
      );
    }
  }
}

export default App;
