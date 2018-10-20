import React, { Component } from "react";
import "./StreamChat.css";

class StreamChat extends Component{

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }

    updateScroll = () => {
        var element = this.myRef.current;
        element.scrollTop = element.scrollHeight;
    }
    // componentDidMount = () =>{
    //     this.updateScroll();
    // }
    componentDidUpdate =() =>{
        this.updateScroll();
    }

    render(){
        return (
            <div className="stream-chat">
                <div id="streamWindow" ref={this.myRef}> 
                {Object.keys(this.props.details).map(key => 
                            <p key={key} className="chat-messages">
                            {this.props.details[key].teamName + ": " + this.props.details[key].text} 
                            </p>

                )}
                </div>
                <hr />
                <form>
                    <input id="username" placeholder="Name" onBlur={this.props.captureUser}></input>
                    <input id="message" placeholder="Message" onBlur={this.props.captureMsg}></input>
                    <button onClick={this.props.handleMsgSubmit} type="button" className="btn btn-success" id="chat-btn">Send</button>
                    </form>
            </div>
    
            )    
    }

}






export default StreamChat;