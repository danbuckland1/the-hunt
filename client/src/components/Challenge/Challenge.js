import React, {Component, Fragment} from "react";
import axios from "axios";
import "./Challenge.css";
import Challenges from "../TeamDash/challenges.json";
import fire from "../../firebase.js";

//references the firebase database
const database = fire.database().ref("log");

class Challenge extends Component {
    state = {
        selectedImg: null,
        index: 0,
        photoURL: "https://placeimg.com/400/400/nature/grayscale"
    }
    
    componentDidMount(props){
        this.setState({
            index: this.props.location.state.challID-1
        })

        // console.log(this.props.match.params.teamname);
    }

//====================CLOUDINARY FUNCTIONS====================
    //function that sets state to selected image (before upload)
    handleImgSelect = event => {
        this.setState({
            selectedImg: event.target.files[0]
        })
    }

    //function that uploads selected image to cloudinary
    handleImgUpload = () => {
        const cloudinaryURL = "https://api.cloudinary.com/v1_1/de3mokru1/upload";
        const cloudinaryUploadPreset = "wphwy703";
        let formData = new FormData();
        formData.append("file", this.state.selectedImg);
        formData.append("upload_preset", cloudinaryUploadPreset);

        axios({
            url: cloudinaryURL,
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: formData
        }).then( (res) => {
            // console.log(res.data.secure_url)
            this.setState({
                selectedImg: null,
                photoURL: res.data.secure_url
            });
            let message = {
                teamName: "GAME ANNOUNCEMENT: ",
                text: this.props.match.params.teamname + " has completed " + Challenges[this.state.index].title + " for " + Challenges[this.state.index].value + " points."
            };
            database.push(message);

        }).catch( (err) => {
            console.error(err);
        });
    }
//====================END CLOUDINARY FUNCTIONS====================

index = this.props.location.state.challID-1;

        handleStatus = (complete) => {
            if(complete === true){
                let status = "Completed";
                return status;
            }
            else {
                let status = "Not Completed";
                return status;
            }
        }

    render(index){
        return ( 
        <Fragment>
            <div className="page-header">
                <h5>{Challenges[this.state.index].title}</h5>
            </div>
            <div className="challenge-view">
                <div className="challenge-properties">
                    <img src={this.state.photoURL} alt="challenge" id="challImg"/>
                    <p className="status"><b>Status:</b> {this.handleStatus(`${Challenges[this.state.index].complete}`)}</p>
                    <p className="challenge-desc">{Challenges[this.state.index].description}</p>
                </div>
                <div className="img-upload">
                <input type="file"onChange={this.handleImgSelect} id="img-upload" placeholder={this.state.selectedImg} />
                <button onClick={this.handleImgUpload} id="upload-btn">Upload</button>
                </div>
            </div>
        </Fragment>
        )
    }
}

export default Challenge;