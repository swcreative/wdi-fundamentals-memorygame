
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
function flipCard(){
	//get the data-id attribute of the card that was just clicked and store it in a variable cardId
	var cardId = this.getAttribute("data-id");

	console.log("User flipped " + cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src", cards[cardId].cardImage );

	//checking if two cards have been played
	if (cardsInPlay.length === 2) {
		checkForMatch();
		return;
	}		
}

// flipCard(0);
// flipCard(2);

function createBoard(){
	console.log("Hello");

	for(var i = 0; i < cards.length; i++){
		//for each card, create an img element and store it in a variable
		var cardElement = document.createElement("img");
		//set the attributes for this element
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i );
		//create an event listener for the element
		cardElement.addEventListener("click", flipCard);
		//append the element to the list
		document.getElementById("game-board").appendChild(cardElement);	
	}
}

createBoard();
