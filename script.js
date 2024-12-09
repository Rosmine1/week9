

// deck class with array to store cards, another to store 
//class rank another one to store the suits//
class Deck {
    constructor(){
        this.deck=[];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King",
        ];
        this.suits =["Hearts","Diamonds","Spades","Clubs"]
    }
    // method that creates a deck from suits and ranks and push a new card
    createDeck(){
        for(let i=0; i<this.suits.length; i++){
            for(let j= 0; j < this.ranks.length; j++){
                let card = {
                    name:`${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1
                }
                this.deck.push(card)
            }
        }
    }
    // method that shuffles the deck
    shuffleDeck(){
        for (let i = this.deck.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i + 1)); 
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            } 

    }

}
// game class  with deck,
//(create a deck, shuffle deck and pass deck )



class Game {
    constructor(){
        // 2 players with hand score and name
        this.player1 = {
            name: 'player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'player 2',
            score: 0,
            hand: []
        }
    }
// logic to play a game(pass card to players, take turns, awards points and log winer
    playGame(){
        //instantiating a new deck inside the game class
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()
        // giving players a hand

        while(deck.deck.length !==0){
            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }
        // playing the game 
        for (let i=0; i< this.player1.hand.length; i++){
            // logic to award points based on comparing the card values
            if(this.player1.hand[i].value > this.player2.hand[i].value){
                this.player1.score ++
                console.log(`
                    p1 card:${this.player1.hand[i].name}
                    p2 card:${this.player2.hand[i].name}
                    player 1 wins a point
                    current score: p1:${this.player1.score} p2:${this.player2.score}
                    `)
            } else if(this.player2.hand[i].value > this.player1.hand[i].value){
                this.player2.score ++
                console.log(`
                    p1 card:${this.player1.hand[i].name}
                    p2 card:${this.player2.hand[i].name}
                    player 2 wins a point
                    current score: p1:${this.player1.score} p2:${this.player2.score}
                    `)
            }else{
                console.log(`
                    p1 card:${this.player1.hand[i].name}
                    p2 card:${this.player2.hand[i].name}
                    Tie: No points awarded
                    current score: p1:${this.player1.score} p2:${this.player2.score}
                    `)
            }
        }
        // LOGGING THE WINNER
        if (this.player1.score> this.player2.score){
            console.log('player 1 wins')
        }else if(this.player2.score> this.player1.score){
            console.log('player 2 wins')
        }else {
            console.log("Tie")
        }

    }
}
const game = new Game
game.playGame()


