/*
21​ Write an Algorithm, Given an integer x, 
Write a function that multiplies x with 3.5 and
returns the integer result.You are not allowed to use %, /, *.
Input: 5Output: 17 (Ignore the digits after decimal point)
*/

var rls = require("readline-sync");

var toAdd = 3.5;
var add = (num, toAdd) => (num ? toAdd + add(--num, toAdd) : 0);

while (1) {
  var num = rls.question("Enter a Number : ");
  if (num === "q") break;
  else console.log(String(add(Number(num), toAdd)).split(".")[0]);
}
