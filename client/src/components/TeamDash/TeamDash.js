import React, {Component, Fragment} from "react";

class TeamDash extends Component{

    componentDidMount() {
        console.log(this.props);
    }

    render(){
        return (
            <Fragment>
                <div className="page-header">
                    <h5>Team Dashboard</h5>
                </div>
                <p>THIS IS THE TEAM DASHBOARD PAGE!!</p>
            </Fragment>
        )
    }


}//End TeamDash Component

export default TeamDash;

