/*
A.​Crack the series 1 2 3 6 9 18 27 54​ ......
B.Write an algorithm to produce the above number series 
  until ‘N’ where N is apositive integer

  1,1,3,3,9,9,27,27,....
*/

var rls = require("readline-sync");

var num = Number(rls.question("Enter A number to produce the sequence : "));
var tmp = 0;

var seq = "";
var range = num % 2 ? Math.floor(num / 2) + 1 : Math.floor(num / 2);

for (var i = 0; i < range; i++) {
  tmp = 3 ** i;
  if (i === range - 1 && num % 2) seq += tmp;
  else seq += tmp + "," + 2 * tmp + ",";
}
console.log(seq);
