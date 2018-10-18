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
    

    //Will update chatHistory state when component mounts
    //This will create an object that gets passed along to the StreamChat component 
    componentDidMount() {
        //Pulls snapshot of firebase
        database.on("value", snapshot => {
            let log = snapshot.val();
            let keys = Object.keys(log);
            //Array that will hold the chat history
            let newChatHistory = [];
            for (let i = 0; i < keys.length; i++) {
                let k = keys[i];
                let teamName = log[k].teamName;
                let text = log[k].text;
                //Add messages to chatHistory array
                newChatHistory.push({
                    id: k,
                    teamName: teamName,
                    text: text
                });
            }
            //Update state to match the chatHistory
            this.setState({
                chatHistory: newChatHistory
            })
            //Log what state looks like in console
            console.log(this.state.chatHistory);
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
    
    //Renders to page
    render(){
        return (
            <Wrapper>
                <Navbar />
                    <StreamChat
                        captureUser={this.captureTeam}
                        captureMsg={this.captureMsg} 
                        handleMsgSubmit={this.handleMsgSubmit} 
                        // key = {key}
                        details={this.state.chatHistory}
                        // id={chatHistory.id}
                        // teamName = {chatHistory.teamName}
                        // text = {chatHistory.text}
                        />
                {/* Piece of code that doens't cause errors */}
                {/* <StreamChat
                        captureUser={this.captureTeam}
                        captureMsg={this.captureMsg} 
                        handleMsgSubmit={this.handleMsgSubmit}
                    /> */}
            </Wrapper>
        );
    };



}//End Activity Class

export default Activity;