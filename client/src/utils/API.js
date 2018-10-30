import axios from "axios";

 export default{
    createGame: (gameName) => {
        return axios.post("/api/newgame", {gameName: gameName})
    },
    pullGame: (gameID) => {
        return axios.get("/api/pullgame/" + decodeURIComponent(gameID))
    },
    createTeam: (teamName, gameID) => {
        //Create logic for team name check and creation
        return axios.post("/api/newteam", {teamName: teamName, gameID: gameID})
    },
    insertTeam: (gameID, teamID) => {
        return axios.post("/api/insertteam",{gameID: gameID, teamID: teamID})
        
    },
    pullTeam: (gameID, teamName) =>{
        return axios.get("api/pullTeam/" + decodeURIComponent(gameID) + "/" + decodeURIComponent(teamName));
        // .then( result => console.log(result))
    }
    
 };//END export default