alert`Let's Play War!
Rules: 
1. Each player receives 13 cards
2. The player with the highest rank of cards at draw wins.
3 If there is a tie, try again!
4. The game will begin once you hit OK. Good luck!
`

//class for players
class Person {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = []

    }
}

let player1 = new Person('Jeff');
console.log(player1);

let player2 = new Person('Andrew')
console.log(player2);


let values = [2,3,4,5,6,7,8,9,10, '3', 'Q', 'K', 'A'];
let suits = ['♠', '♣', '♥', '♦'];
let ranks = [2,3,4,5,6,7,8,9,10,11,12,13,14];

//suit, rank, and value

class Card{
    constructor(value, suit, rank) {
        this.value = value;
        this.suit = suit;
        this.rank = rank;

    }

}

// let cardTest = new Card('test1', 'test2', 'test3');
// console.log(cardTest)

class Deck{
    constructor() {
        this.deck = []; //put whole test in here
    }
    //create deck
    createDeck() {
        for(let valueIndex = 0; valueIndex < values.length; valueIndex++) {
            for(let suitIndex = 0; suitIndex < suits.length; suitIndex++){
                this.deck.push(new Card(values[valueIndex], suits[suitIndex], ranks[valueIndex]))
            }
        }
    
    }

    //*****Shuffle Time /
    shuffleDeck() {
        for(let i = this.deck.length - 1; i > 0; i--){
            let b = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[b]] = [this.deck[b], this.deck[i]];
        }
    }
    //And Deal
    dealDeck() {
        player1.hand = this.deck.slice(0,26);
        player2.hand = this.deck.slice(26,52);
        console.log("printing player2 hand",player2.hand);
        console.log("printing player1 hand", player1.hand);
    }
}

let newDeck = new Deck()
newDeck.createDeck();
newDeck.shuffleDeck();
newDeck.dealDeck();

//CLASS FOR WAR

class Game {
    constructor(){
    }
    //Need a score to assign winner
    compareCards() {
    for(let round = 0; round < 26; round++) {
        // console.log(player1.hand[round])
        if(player1.hand[round].rank > player2.hand[round].rank) {
            player1.score = player1.score + 1;

            console.log(`
            round ${round}
            ${player1.hand[round].value} of ${player1.hand[round].suit}
            ${player2.hand[round].value} of ${player2.hand[round].suit}
            
            ${player1.name} is the winner!
            
            Player 1 Score: ${player1.score}
            Player 2 Score: ${player2.score}
            `)
        } else if(player2.hand[round].rank > player1.hand[round].rank) {
            player2.score = player2.score + 1; 
        
           
            console.log(`
            round ${round}
            ${player1.hand[round].value} of ${player1.hand[round].suit}
            ${player2.hand[round].value} of ${player2.hand[round].suit}
            
            ${player2.name} is the winner!
            
            Player 1 Score: ${player1.score}
            Player 2 Score: ${player2.score}
            `)

        } else {

            console.log(`
            round ${round}
            ${player1.hand[round].value} of ${player1.hand[round].suit}
            ${player2.hand[round].value} of ${player2.hand[round].suit}
            
            ${player2.name}  and ${player1.name} is the winner!
            
            Player 1 Score: ${player1.score}
            Player 2 Score: ${player2.score}
            `)

        }
        
    }
 }

}
let newGame = new Game();
newGame.compareCards();
// Total Scores for Players

console.log('Player 1 final match score ', player1.score);
console.log('Player 2 Final Score ', player2.score);

// Evaluate winner

 if(player1.score > player2.score) {
    alert(` Winner! Jeff won by ${player1.score} points.
        Andrew, ${player2.score} will not cut it! Play them again!`);
    
 } else if (player2.score > player1.score) {
    alert(` Winner! Andrew won by ${player2.score} points.
        Jeff, ${player1.score} will not cut it! Play them again!`);

 } else {
    alert(` You both tied! Nice work.`);
 }