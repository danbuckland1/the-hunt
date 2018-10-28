import axios from "axios";

export default{
    createGame: () => {
        console.log("Running the browser");
        return axios.get("/api/newgame")
    }

};//END export default