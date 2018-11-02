import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import Challenges from "./challenges.json";
import "./TeamDash.css";


class TeamDash extends Component{
    componentDidMount() {
        // console.log(this.props.match);
    }

    handleStatus = (complete) => {
        if(complete){
            let status = "Completed";
            return status;
        }
        else {
            let status = "Not Completed";
            return status;
        }
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
                        <Link to={
                            {
                                pathname: `${this.props.match.url}/${Challenges.id}`,
                                state: { challID: `${Challenges.id}` }
                            }
                        }>
                        <h6 className="challenge-titles">{Challenges.title}</h6></Link>
                        <p className="statuses"><b>Status: </b>{this.handleStatus(Challenges.complete)}</p>
                        <p className="challenge-descs">{Challenges.description}</p>
                    </div>
                )}
                </div>
            </Fragment>
        )
    }


}//End TeamDash Component

export default TeamDash;

