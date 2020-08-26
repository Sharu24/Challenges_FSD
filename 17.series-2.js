/*

A.Crack the series ​2 15 41 80 132 197 275 366 470 587 ......
B.Write an algorithm to produce the above number series until ‘N’ 
  where N is apositive integer

diff = 13, 26, 39, 52, 65, 91, 104
*/

var rls = require("readline-sync");

var num = Number(rls.question("Enter a number to generate the sequence : "));
var i = 0,
  k = 2,
  out = "";
do {
  k = k + 13 * i;
  out += k + ",";
  i++;
} while (i < num);

console.log("Loops : ", out);

function pattern(num, i = 0, k = 2) {
  if (!num) return "";
  else return k + "," + pattern(--num, ++i, k + 13 * i);
}
console.log("Recursion : ", pattern(num));
