let cards=[]
createDeck()
const player1 = deal(2)
const player2 = deal(2)
console.log(player1,player2)
flop()

function createDeck(){
    // Create deck
    const numbers = ["Ace","2","3","4","5","6","7","8","9","10","J","Q","K"]
    const family = ["coeur","trefle","pic","carreau"]
    for(i=0; i<numbers.length; i++){
        for(j=0; j<family.length; j++){
            cards.push(numbers[i]+" de " + family[j])
        }
    }
    // console.log(cards)
    //shuffle cards
    for(i=0; i<cards.length; i++){
        let j= Math.floor(Math.random()*cards.length)
        let tmp = cards[i]
        cards[i] = cards[j]
        cards[j] = tmp
}
    // console.log(cards)
}
async function deal(number){
        let dealed = []
        for (i=0;i<number;i++){
            dealed[i]=cards.pop()
        }
        // console.log(cards)
        // console.log(dealed)
    return dealed
}

function flop (){
    let cardsFlipped = []
    let burned = []
    if (cardsFlipped.length==0){
        burned.push(deal(1))
        cardsFlipped.push(deal(1))
        cardsFlipped.push(deal(1))
        cardsFlipped.push(deal(1))
    }if (cardsFlipped.length==3){
        burned.push(deal(1))
        cardsFlipped.push(deal(1))
    }if(cardsFlipped.length==4){
        burned.push(deal(1))
        cardsFlipped.push(deal(1))
    }
    console.log(cards)
}

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
class Deck {
    constructor() {
        this.cards = [];    
    }                     
    createDeck() {
        
            let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
            let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
            let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            
            for (let i = 0; i < suits.length; i++) {
                for (let j = 0; j < ranks.length; j++) {
                    this.cards.push(new Card(suits[i], ranks[j], values[j]));
                }
            }
        
        
    }
shuffleDeck() {
        
    }
}