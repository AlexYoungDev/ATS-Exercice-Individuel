// Piques -> "Spades"
// Carreaux -> "Diamonds"
// Trèfles -> "Clubs"
// Coeurs -> "Hearts"

// valet -> "jack"
// reine -> "queen"
// roi -> "king"

function creatDeck() {
    let symbol = ["S", "D", "C", "H"];
    let number = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    let deck = [];

    for (let i = 0; i < 4; i++)
    for (let j = 0; j < 13; j++)
    
    deck.push(number[j]+symbol[i])
    console.log(deck) 
}


