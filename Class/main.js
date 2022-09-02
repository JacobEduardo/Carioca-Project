const _table = require('./Table.js');
const _player = require('./Player');
const readline = require("readline");

const q1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//////////////////////////////////////////////////

var table = new _table.Table()
var playar01 = new _player.Player()

q1.question("Cuantos van jugar", function (answer) {
    playar01.hand.push (table.dealPlayer())
    q1.close();
});

console.log("este player")
console.log(playar01.hand)