import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import Challenges from "./challenges.json";
import "./TeamDash.css";


class TeamDash extends Component{

    componentDidMount() {
        console.log(this.props.match);
    }

    render(){
        return (
            <Fragment>
                <div className="page-header">
                    <h5>Team Dashboard</h5>
                </div>
                <div className="challenges-listview">
                {Challenges.map( (Challenges) => 
                    <div key={Challenges.id} id={Challenges.id} className="challenge-div">
                        <Link to={ `${this.props.match.url}/${Challenges.id}` }><h6 className="challenge-title">{Challenges.title}</h6></Link>
                        <p className="challenge-desc">{Challenges.description}</p>
                    </div>
                )}
                </div>
            </Fragment>
        )
    }


}//End TeamDash Component

export default TeamDash;

