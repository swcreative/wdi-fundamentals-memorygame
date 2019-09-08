
//Confirm JS file is connected to the index.html file
console.log("Up and running!");


//create four variables that simulate the cards in the game
// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

//Use console.log to display the value of two cards picked
// console.log("User flipped " + cardTwo);
// console.log("User flipped " + cardFour);

//create an array 'cards' to hold four strings, one for each of our cards
var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];

var cardsInPlay = [];

//checks if the cardsInPlay match each other
function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		} else {
		alert("Sorry, try again.");
	}	
}

//write an if statement to check if the length of the cardsInPlay array is 2


//function flipcard followed by function checkForMatch
function flipCard(cardId){
	console.log("User flipped " + cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
		return;
	}	


//All to be deleted
	//create a variable to represent the first card that the user flips
	//var cardOne = cards[0];

	//add this first card to the 'cardsInPlay' array
	//cardsInPlay.push(cardOne);

	//use console.log() to display the card that the user flipped
	//console.log("User flipped " + cardOne);

	//create a second variable to represent the second card that the user flipped
	//var cardTwo = cards[2];

	//add this second card to the 'cardsInPlay' array
	//cardsInPlay.push(cardTwo);

	//use console.log() to display the card that the user flipped
	//console.log("User flipped " + cardTwo);	
}



flipCard(0);
flipCard(2);