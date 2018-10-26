import React, {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import Challenges from "./challenges.json";
import "./TeamDash.css";


class TeamDash extends Component{

    //Conditions for rendering this page
    //Challenge list is being generated from a .json file, instead we will need to pull it from the database
        //When user logs in
            //App will prompt user to create a game
            //Game record will be created in Game table
            //Team record will be created in Team table
                //Link Team record with Game Record
                //Generate a set of 10 challenges with IDs unique to Team and Game from a challenge template
            //TeamDash will render challenges to page based on what is pulled from the database
    //We will name Game ID
    //We will need Team ID


    componentDidMount() {
        // console.log(this.props.match);
    }

    handleStatus = () => {
        if(Challenges.complete){
            let status = "Completed";
            return console.log(status);
        }
        else {
            let status = "Not Completed";
            return console.log(status);
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
                        <Link to={ `${this.props.match.url}/${Challenges.id}` }><h6 className="challenge-title">{Challenges.title}</h6></Link>
                        <p className="status"><b>Completed:</b> {JSON.stringify(`${Challenges.complete}`).replace(/\"/g, "")}</p>
                        <p className="challenge-desc">{Challenges.description}</p>
                    </div>
                )}
                </div>
            </Fragment>
        )
    }


}//End TeamDash Component

export default TeamDash;

