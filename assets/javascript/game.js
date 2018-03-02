
  // Initialize Firebase
var config = {
  apiKey: "AIzaSyBIF3eQvFqZoz9MaW5hltfpY3CEhDRDM04",
  authDomain: "rpsdata-2871c.firebaseapp.com",
  databaseURL: "https://rpsdata-2871c.firebaseio.com",
  projectId: "rpsdata-2871c",
  storageBucket: "",
  messagingSenderId: "713936579113"
};
firebase.initializeApp(config);

var database = firebase.database();
var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");
var 