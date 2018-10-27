import React, {Component, Fragment} from "react";
import axios from "axios";

class Challenge extends Component {
    state = {
        selectedImg: null
    }

    componentDidMount(props){
        // console.log(this.props)
    }

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
            console.log(res.data.secure_url);
        }).catch( (err) => {
            console.error(err);
        });
    }

    render(){
        return ( 
        <Fragment>
            <div className="challenge-view">
                <div className="img-upload">
                <input type="file"onChange={this.handleImgSelect} />
                <button onClick={this.handleImgUpload}>Upload</button>
                </div>
            </div>
        </Fragment>
        )
    }
}

export default Challenge;