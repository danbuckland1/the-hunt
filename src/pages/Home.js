//Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
//Components
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";
//Create/Join/Login form components
import CreateGame from "../components/CreateGame";
import JoinGame from "../components/JoinGame";
import LoginGame from "../components/LoginGame";


class Home extends Component {
    render() {
      return (
      <Wrapper>
        <Jumbotron />
        <Router>
          <div className="dynamicForm">
          <Route exact path="/" component={CreateGame} />
          <Route exact path="/join" component={JoinGame} />
          <Route exact path="/login" component={LoginGame}/>
          </div>
        </Router>
      </Wrapper>
      );
    }
  }
  
  export default Home;