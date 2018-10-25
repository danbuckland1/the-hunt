import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import StreamChat from "../components/StreamChat";
import TeamDash from "../components/TeamDash";
import Leaderboard from "../components/Leaderboard";
import GameHeader from "../components/GameHeader";


class Game extends Component {
    
    //Renders to page
    render(props){
        return (
            <Fragment>
                <Navbar match={this.props.match} />
                <GameHeader />
                 <hr />
                 <Switch>
                    <Route exact path={ `/game` } 
                        render={(props) => { return <StreamChat {...props} />}}
                    />
                     <Route exact path={ `/game/board` } 
                        render={(props) => { return <Leaderboard {...props} />}}
                    />
                    <Route exact path={ `/game/team` } 
                        render={(props) => { return <TeamDash {...props} />}}
                    />
                </Switch>

            </Fragment>
        );
    };



}//End Game Class

export default Game;