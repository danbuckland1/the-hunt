import React, { Component, Fragment } from "react";
import fire from "../../firebase.js";
import "./StreamChat.css";

//references the firebase database
const database = fire.database().ref("log");

class StreamChat extends Component{

    //==========================================================================
    //BEGIN - ACTIVITY/CHAT WINDOW FUNCTIONALITY
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

    //END - ACTIVITY/CHAT WINDOW FUNCTIONALITY
    //==========================================================================

    
    //==========================================================================
    //BEGIN - SCROLL TO BOTTOM OF CHAT FUNCTIONALTIY
    //Function that scrolls to the bottom of chat
    constructor(props) {
        super(props);
        //Creates reference so chat window will scroll to this point
        this.myRef = React.createRef();
      }
    updateScroll = () => {
        var element = this.myRef.current;
        element.scrollTop = element.scrollHeight;
    }

    //Calls on function to scroll to bottom of chat when component updates
    componentDidUpdate =() =>{
        this.updateScroll();
    }
    //END - SCROLL TO BOTTOM OF CHAT FUNCTIONALTIY
    //==========================================================================

    render(){
        return (
            <Fragment>
                <div className="page-header">
                    <h5>Activity Stream</h5>
                 </div>
                <div className="stream-chat">
                    <div id="streamWindow" ref={this.myRef}> 
                    {Object.keys(this.state.chatHistory).map(key => 
                        <p key={key} className="chat-messages">
                        {/* <b>{this.props.details[key].teamName + ": "}</b>{this.props.details[key].text}  */}
                        <b>{this.state.chatHistory[key].teamName + ": "}</b>{this.state.chatHistory[key].text} 
                        </p>

                    )}
                    </div>
                    <form>
                        <input id="username" placeholder="Name" onBlur={this.captureTeam}></input>
                        <input id="message" placeholder="Message" onBlur={this.captureMsg}></input>
                        <button onClick={this.handleMsgSubmit} type="button" className="btn btn-success" id="chat-btn">Send</button>
                        </form>
                </div>
            </Fragment>
    
        )    
    }

}






export default StreamChat;