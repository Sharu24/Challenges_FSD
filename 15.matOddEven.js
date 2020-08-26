var rsl = require("readline-sync");

var mh = Number(rsl.question("Enter the height of the Array : "));
var mw = Number(rsl.question("Enter the width of the Array : "));
var mSize = mh * mw;
var even = (odd = 0);

for (var i = 0; i < mSize; i++) {
  Number(rsl.question(`Enter R->L,T->B [${i + 1}] :`)) % 2 ? ++odd : ++even;
}

console.log(`Count of Even Numbers = ${even}`);
console.log(`Count of Odd Numbers = ${odd}`);
