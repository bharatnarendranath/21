//
//Blackjack
//

//Card  variables
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two"
];

//DOM variables

let textArea = document.getElementById("text-area"),
  newGameButton = document.getElementById("new-game-button"),
  hitButton = document.getElementById("hit-button"),
  stayButton = document.getElementById("stay-button");

//Game variables
let gameStarted = false,
  gameOver = false,
  playerWon = false,
  dealerCards = [],
  playerCards = [],
  dealerScore = 0,
  playerScore = 0,
  deck = [];

hitButton.style.display = "none";
stayButton.style.display = "none";
showStatus();

newGameButton.addEventListener("click", function() {
  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  // textArea.innerText = "Started...";
  newGameButton.style.display = "none";
  hitButton.style.display = "inline";
  stayButton.style.display = "inline";
});

function createDeck() {
  let deck = [];
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let valueIndex = 0; valueIndex < values.length; valueIndex++) {
      let card = {
        suit: suits[suitIndex],
        value: values[valueIndex]
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck){
  for(let i= 0; i < deck.length; i++ ){
    let swapIndex = Math.trunc(Math.random()*deck.length);
    let tmp = deck[swapIndex];
    deck[swapIndex] = deck[i];
    deck[i]=tmp;
  }
}

function getCardString(card) {
  return card.value + "of" + card.suit;
}

function showStatus() {
  if(!gameStarted){
    textArea.innerText = "Welcome to Blackjack !";
    return;
  }
  for(var i = 0;i<deck.length;i++){
    textArea.innerText += '\n + getCardString(deck[i]);
  }
}

function getNextCard() {
  return deck.shift();
}
let deck = createDeck();


let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack !");

console.log("You are dealt:");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));

// for (let i = 0; i < deck.length; i++) {
//   console.log(deck[i]);
// }