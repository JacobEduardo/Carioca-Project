class Card{
    constructor(number, color, suits){
        this.number = number
        this.color = color
        this.suits = suits 
    }
}

class DeckOfCards{
    constructor(){
        this.cards = []

        this.cards.push(new Card (0,"red","☺"));
        this.cards.push(new Card (0,"red","☺"));
        this.cards.push(new Card (0,"black","☺"));
        this.cards.push(new Card (0,"black","☺"));

        this.cards.push(new Card (1,"red","♥"));
        this.cards.push(new Card (2,"red","♥"));
        this.cards.push(new Card (3,"red","♥"));
        this.cards.push(new Card (4,"red","♥"));
        this.cards.push(new Card (5,"red","♥"));
        this.cards.push(new Card (6,"red","♥"));
        this.cards.push(new Card (7,"red","♥"));
        this.cards.push(new Card (8,"red","♥"));
        this.cards.push(new Card (9,"red","♥"));
        this.cards.push(new Card (10,"red","♥"));
        this.cards.push(new Card (11,"red","♥"));
        this.cards.push(new Card (12,"red","♥"));
        this.cards.push(new Card (13,"red","♥"));

        this.cards.push(new Card (1,"red","♦"));
        this.cards.push(new Card (2,"red","♦"));
        this.cards.push(new Card (3,"red","♦"));
        this.cards.push(new Card (4,"red","♦"));
        this.cards.push(new Card (5,"red","♦"));
        this.cards.push(new Card (6,"red","♦"));
        this.cards.push(new Card (7,"red","♦"));
        this.cards.push(new Card (8,"red","♦"));
        this.cards.push(new Card (9,"red","♦"));
        this.cards.push(new Card (10,"red","♦"));
        this.cards.push(new Card (11,"red","♦"));
        this.cards.push(new Card (12,"red","♦"));
        this.cards.push(new Card (13,"red","♦"));

        this.cards.push(new Card (1,"black","♣"));
        this.cards.push(new Card (2,"black","♣"));
        this.cards.push(new Card (3,"black","♣"));
        this.cards.push(new Card (4,"black","♣"));
        this.cards.push(new Card (5,"black","♣"));
        this.cards.push(new Card (6,"black","♣"));
        this.cards.push(new Card (7,"black","♣"));
        this.cards.push(new Card (8,"black","♣"));
        this.cards.push(new Card (9,"black","♣"));
        this.cards.push(new Card (10,"black","♣"));
        this.cards.push(new Card (11,"black","♣"));
        this.cards.push(new Card (12,"black","♣"));
        this.cards.push(new Card (13,"black","♣"));

        this.cards.push(new Card (1,"black","♠"));
        this.cards.push(new Card (2,"black","♠"));
        this.cards.push(new Card (3,"black","♠"));
        this.cards.push(new Card (4,"black","♠"));
        this.cards.push(new Card (5,"black","♠"));
        this.cards.push(new Card (6,"black","♠"));
        this.cards.push(new Card (7,"black","♠"));
        this.cards.push(new Card (8,"black","♠"));
        this.cards.push(new Card (9,"black","♠"));
        this.cards.push(new Card (10,"black","♠"));
        this.cards.push(new Card (11,"black","♠"));
        this.cards.push(new Card (12,"black","♠"));
        this.cards.push(new Card (13,"black","♠"));
///////////////////////////////////////////////////////////////////////
        this.cards.push(new Card (1,"red","♥"));
        this.cards.push(new Card (2,"red","♥"));
        this.cards.push(new Card (3,"red","♥"));
        this.cards.push(new Card (4,"red","♥"));
        this.cards.push(new Card (5,"red","♥"));
        this.cards.push(new Card (6,"red","♥"));
        this.cards.push(new Card (7,"red","♥"));
        this.cards.push(new Card (8,"red","♥"));
        this.cards.push(new Card (9,"red","♥"));
        this.cards.push(new Card (10,"red","♥"));
        this.cards.push(new Card (11,"red","♥"));
        this.cards.push(new Card (12,"red","♥"));
        this.cards.push(new Card (13,"red","♥"));

        this.cards.push(new Card (1,"red","♦"));
        this.cards.push(new Card (2,"red","♦"));
        this.cards.push(new Card (3,"red","♦"));
        this.cards.push(new Card (4,"red","♦"));
        this.cards.push(new Card (5,"red","♦"));
        this.cards.push(new Card (6,"red","♦"));
        this.cards.push(new Card (7,"red","♦"));
        this.cards.push(new Card (8,"red","♦"));
        this.cards.push(new Card (9,"red","♦"));
        this.cards.push(new Card (10,"red","♦"));
        this.cards.push(new Card (11,"red","♦"));
        this.cards.push(new Card (12,"red","♦"));
        this.cards.push(new Card (13,"red","♦"));

        this.cards.push(new Card (1,"black","♣"));
        this.cards.push(new Card (2,"black","♣"));
        this.cards.push(new Card (3,"black","♣"));
        this.cards.push(new Card (4,"black","♣"));
        this.cards.push(new Card (5,"black","♣"));
        this.cards.push(new Card (6,"black","♣"));
        this.cards.push(new Card (7,"black","♣"));
        this.cards.push(new Card (8,"black","♣"));
        this.cards.push(new Card (9,"black","♣"));
        this.cards.push(new Card (10,"black","♣"));
        this.cards.push(new Card (11,"black","♣"));
        this.cards.push(new Card (12,"black","♣"));
        this.cards.push(new Card (13,"black","♣"));

        this.cards.push(new Card (1,"black","♠"));
        this.cards.push(new Card (2,"black","♠"));
        this.cards.push(new Card (3,"black","♠"));
        this.cards.push(new Card (4,"black","♠"));
        this.cards.push(new Card (5,"black","♠"));
        this.cards.push(new Card (6,"black","♠"));
        this.cards.push(new Card (7,"black","♠"));
        this.cards.push(new Card (8,"black","♠"));
        this.cards.push(new Card (9,"black","♠"));
        this.cards.push(new Card (10,"black","♠"));
        this.cards.push(new Card (11,"black","♠"));
        this.cards.push(new Card (12,"black","♠"));
        this.cards.push(new Card (13,"black","♠"));
    }
}

class Table{
    constructor(){
        this.deckOfCards = new DeckOfCards
        this.cementery = []
    }

    dealPlayer(){
        var x = this.deckOfCards.cards.length
        var y = Math.floor(Math.random() * x)
        let card  = this.deckOfCards.cards[y]
        this.deckOfCards.cards.splice(y, 1)
        return card
    }
}

module.exports = {
    Table
}