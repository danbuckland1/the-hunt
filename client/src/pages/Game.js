import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import StreamChat from "../components/StreamChat";
import Challenges from "../components/Challenges";
import Leaderboard from "../components/Leaderboard";


class Activity extends Component {
    
    //Renders to page
    render(props){
        return (
            <Fragment>
                <Navbar match={this.props.match} />
                 <div className="game-header">
                     <h5 className="game-name">Game Name (ID#)</h5>
                     <p className="team-greet">Welcome Team 1</p>
                     <p className="time"><b>Time Remaining:</b> 00:00:00</p>
                 </div>
                 <hr />
                 <Switch>
                    <Route exact path={ `/game` } 
                        render={(props) => { return <StreamChat {...props} />}}
                    />
                     <Route exact path={ `/game/board` } 
                        render={(props) => { return <Leaderboard {...props} />}}
                    />
                    <Route exact path={ `/game/challenges` } 
                        render={(props) => { return <Challenges {...props} />}}
                    />
                </Switch>

            </Fragment>
        );
    };



}//End Activity Class

export default Activity;