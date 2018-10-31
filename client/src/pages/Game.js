import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import StreamChat from "../components/StreamChat";
import TeamDash from "../components/TeamDash";
import Leaderboard from "../components/Leaderboard";
import GameHeader from "../components/GameHeader";
import Challenge from "../components/Challenge";
import API from "../utils/API";


class Game extends Component {

    //Renders to page
    render(props){
        return (
            <Fragment>
                <Navbar {...props} match={this.props.match} />
                <GameHeader {...props} match={this.props.match}/>
                 <hr />
                 <Switch>
                    <Route exact path="/game/:gameid/:teamname" 
                        render={(props) => { return <StreamChat {...props} />}}
                    />
                     <Route exact path="/game/:gameid/:teamname/board" 
                        render={(props) => { return <Leaderboard {...props} />}}
                    />
                    <Route exact path="/game/:gameid/:teamname/team"
                        render={(props) => { return <TeamDash {...props} />}}
                    />
                    <Route exact path={ "/game/:gameid/:teamname/team/:id"} 
                        render={(props) => { return <Challenge {...props} />}}
                    />

                </Switch>

            </Fragment>
        );
    };



}//End Game Class

export default Game;