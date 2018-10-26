import React, {Component, Fragment} from "react";

class Challenge extends Component {

    componentDidMount(props){
        console.log(this.props)
    }

    render(){
        return ( 
        <Fragment>
            <div className="challenge-view">
                <p>Test individual challenge page</p>
            </div>
        </Fragment>
        )
    }
}

export default Challenge;