import React, { Component } from "react";
import fire from "../firebase.js";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import StreamChat from "../components/StreamChat";



class Activity extends Component {

    state = {
        user: "",
        msg: ""
    }

    captureUser = (event) => 
    {
        let user = event.target.value;
        this.setState({
            user: user
        });
        console.log(user);
    };

    captureMsg = (event) => 
    {
        let msg = event.target.value;
        this.setState({
            msg: msg
        });
        console.log(msg);
        
    };


    handleMsgSubmit = (event) => {
        event.preventDefault();
        const chatRef = fire.database().ref();
        let chat = {
            username: this.state.user,
            text: this.state.msg
        };
        chatRef.push(chat);
        this.setState({
            user: "",
            msg: ""
        });
        console.log("submitted!");
    };


    render(){
        return (
            <Wrapper>
                <Navbar />
                <StreamChat 
                captureUser={this.captureUser}
                captureMsg={this.captureMsg} 
                handleMsgSubmit={this.handleMsgSubmit}
                />
            </Wrapper>
        );
    };



}//End Activity Class

export default Activity;