import React from "react";
import "./StreamChat.css";

const StreamChat = props => (
    <div className="stream-chat">
        <div id="streamWindow">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut sem ipsum. Aliquam vulputate fringilla nisi, ut mattis sem auctor et. In cursus vitae leo et gravida. Praesent id massa arcu. In in sapien et justo venenatis dignissim. In pulvinar tortor nisl, vel rhoncus orci mollis non. Nulla aliquam, leo sit amet volutpat luctus, lorem libero iaculis tortor, quis lacinia ex ipsum ac nulla. Nullam pharetra efficitur arcu, vel pretium erat facilisis a. Etiam consequat tortor urna, eu consequat nisl pretium a. </p>

        <p>Donec consequat et arcu non maximus. Nunc eget augue nec turpis auctor aliquet at sed turpis. Vestibulum ut vestibulum orci. Fusce maximus aliquet mi vitae efficitur. Nunc cursus metus id velit ullamcorper consequat. Nunc ultricies dolor mi, vel elementum magna ullamcorper laoreet. Fusce lacinia felis sit amet augue convallis varius. Aenean sed sollicitudin tellus. Vivamus at tellus diam. Vestibulum viverra efficitur erat, eget molestie nunc. Duis mattis, libero sit amet euismod efficitur, sapien ante tristique libero, sagittis efficitur mi lectus sed metus. Suspendisse potenti. Donec congue et felis vel consequat. Quisque ut erat nec tortor suscipit condimentum et a metus.</p>

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