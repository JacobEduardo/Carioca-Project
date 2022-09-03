const _table = require('./Table.js');
const _player = require('./Player');
const readline = require("readline");

const q1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const players = []

//////////////////////////////////////////////////

var table = new _table.Table()

q1.question("Cuantos van jugar", function (answer) {

    for (let i = 0; i < answer; i++) {
        players[i] = new _player.Player("plater_0" + i.toString());
        for (let k = 0; k < 12; k++) {
            players[i].hand.push(table.dealPlayer())
        }
        console.log(players[i].hand.length)
    }

    console.log("este player")
    console.log(players)
    console.log(table.deckOfCards.cards.length)

    q1.question("Quien parte?", function (answer) {
        i = answer
        for (let i = 0; i < players.length; i++) {
            players[i].hand.push(table.dealPlayer())
            console.log(players[i].hand.length)
            if (i = players.length) {
                i = 0
            }
            if(table.deckOfCards.cards.length == 0){
                i = 100
            }
        }
    });
});
