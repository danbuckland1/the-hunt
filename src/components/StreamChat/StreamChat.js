import React from "react";
import "./StreamChat.css";

const StreamChat = props => (
    <div className="stream-chat">
        <div id="streamWindow">
            <p className="line" id={props.id}>{props.user + ": " + props.text}</p>
        </div>
        <hr />
        <form>
            <input id="username" placeholder="Name" onBlur={props.captureUser}></input>
            <input id="message" placeholder="Message" onBlur={props.captureMsg}></input>
            <button onClick={props.handleMsgSubmit} type="button" className="btn btn-success" id="chat-btn">Send</button>
        </form>
    </div>
);


export default StreamChat;