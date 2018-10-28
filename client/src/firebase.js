import firebase from 'firebase'

//Config needed to intialize firebase
const config = {
  apiKey: "AIzaSyDMcDPdBpIkofIb9AvOTtB3EzLu5wKAnkg",
  authDomain: "the-hunt-stream-chat.firebaseapp.com",
  databaseURL: "https://the-hunt-stream-chat.firebaseio.com",
  projectId: "the-hunt-stream-chat",
  storageBucket: "the-hunt-stream-chat.appspot.com",
  messagingSenderId: "823445327530"
};

//Initialize firebase
const fire = firebase.initializeApp(config);

export default fire;