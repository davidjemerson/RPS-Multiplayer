
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
var playerOneName = "Mike";
var playerTwoName = "Steve";
var playerOneChoice = "";
var playerTwoChoice = "";
var currentPlayer = "playerTwo";
var playerCount = 2;

if (playerCount === 0) {
	$("#localName").text("Click to Join");
	$("#remoteName").text("Waiting for Opponent");
}

else if (playerCount === 1) {
	$("#localName").text("Click to Join");
	if (playerOneName !== "") {
		$("#remoteName").text(playerOneName);
	}
	else {
		$("#remoteName").text(playerTwoName);
	}
}

else {
	$("#localName").text(playerOneName);
	$("#remoteName").text(playerTwoName);
}

if (currentPlayer === "playerOne") {

	$("#modeIndicator").text("You're player 1");

	$("#localRock").on('click', function(event) {
		event.preventDefault();
		playerOneChoice = "Rock";
		database.ref().set({
			playerOneChoice: playerOneChoice
		});
	});

	$("#localPaper").on('click', function(event) {
		event.preventDefault();
		playerOneChoice = "Paper";
		database.ref().set({
			playerOneChoice: playerOneChoice
		});
	});

	$("#localScissors").on('click', function(event) {
		event.preventDefault();
		playerOneChoice = "Scissors";
		database.ref().set({
			playerOneChoice: playerOneChoice
		});
	});
}

else if (currentPlayer === "playerTwo") {

	$("#modeIndicator").text("You're player 2");

	$("#localRock").on('click', function(event) {
		event.preventDefault();
		playerTwoChoice = "Rock";
		database.ref().set({
			playerTwoChoice: playerTwoChoice
		});
	});

	$("#localPaper").on('click', function(event) {
		event.preventDefault();
		playerTwoChoice = "Paper";
		database.ref().set({
			playerTwoChoice: playerTwoChoice
		});
	});

	$("#localScissors").on('click', function(event) {
		event.preventDefault();
		playerTwoChoice = "Scissors";
		database.ref().set({
			playerTwoChoice: playerTwoChoice
		});
	});
}

else {
	$("#modeIndicator").text("Spectator Mode");
}