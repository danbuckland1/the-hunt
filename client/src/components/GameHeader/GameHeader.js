import React, { Component } from "react";
import API from "../../utils/API";

class GameHeader extends Component {
    state = {
        gameName: ""
    }

    componentDidMount = (match) => {
        const gameID = this.props.match.params.gameid;
        API.pullGame(gameID)
            .then( res => {
                this.setState({
                    gameName: res.data.gameName
                  });
            });
    }

    render(){
        return(
            <div className="game-header">
                <h5 className="game-name">{this.state.gameName} (ID#)</h5>
                <p className="team-greet">Welcome Team 1</p>
                <p className="time"><b>Time Remaining:</b> 00:00:00</p>
            </div>
        )
    }
}
export default GameHeader;