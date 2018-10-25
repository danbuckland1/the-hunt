import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import StreamChat from "../components/StreamChat";


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
                 {/* Insert Routes for Activity, Challenge, and Leaderboard */}
                    <StreamChat />
            </Fragment>
        );
    };



}//End Activity Class

export default Activity;