//
//Blackjack
//

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

let textArea = document.getElementById("text-area"),
  newGameButton = document.getElementById("new-game-button"),
  hitButton = document.getElementById("hit-button"),
  stayButton = document.getElementById("stay-button");

hitButton.style.display = "none";
stayButton.style.display = "none";

newGameButton.addEventListener("click", function() {
  textArea.innerText = "Started...";
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

function getCardString(card) {
  return card.value + "of" + card.suit;
}

function getNextCard() {
  return deck.shift();
}
let deck = createDeck();

// for (let i = 0; i < deck.length; i++) {
//   console.log(deck[i]);
// }

let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack !");

console.log("You are dealt:");
console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));
