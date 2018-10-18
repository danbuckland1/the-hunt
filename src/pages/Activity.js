import React, { Component } from "react";
import fire from "../firebase.js";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import StreamChat from "../components/StreamChat";

//references the firebase database
const database = fire.database().ref("log");


class Activity extends Component {
    //Sets State
    state = {
        team: "",
        txt: "",
        chatHistory: {}
    }

    //Will load chat history to window
    componentDidMount() {
        database.on("value", snapshot => {
            this.setState({
                chatHistory: snapshot.val()
            });
            let log = snapshot.val();
            let keys = Object.keys(log);
            console.log(keys);
            for (let i = 0; i < keys.length; i++) {
                let k = keys[i];
                let teamName = log[k].teamName;
                let text = log[k].text;
                console.log(teamName + ": " + text);
            }
        });
    }

    //Captures Username from input field
    captureTeam = (event) => 
    {
        let team = event.target.value;
        //adds username to the state
        this.setState({
            team: team
        });
    };

    //Captures Message from input field
    captureMsg = (event) => 
    {
        let txt = event.target.value;
        //adds message to the state
        this.setState({
            txt: txt
        }); 
    };


    //Takes captured team/message and sends it to firebase
    handleMsgSubmit = (event) => {
        event.preventDefault();
        //Create chat object that will take the username/text from the state
        let message = {
            teamName: this.state.team,
            text: this.state.txt
        };
        //pushes message object to firebase
        database.push(message);
        //clears the state for future messages
        this.setState({
            team: "",
            txt: ""
        });
        console.log("submitted!");
    };


    render(){
        return (
            <Wrapper>
                <Navbar />
                <StreamChat 
                captureUser={this.captureTeam}
                captureMsg={this.captureMsg} 
                handleMsgSubmit={this.handleMsgSubmit}
                id = {this.keys}
                user = {this.name}
                text = {this.text}
                />
            </Wrapper>
        );
    };



}//End Activity Class

export default Activity;