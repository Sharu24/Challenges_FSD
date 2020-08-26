/*
6​ Write an Algorithm to accept a number as a command line input. 
Check for thenumber is a Prime Number or not. 
If it's a prime number, print the multiplication table ofthe number
*/
var rls = require("readline-sync");

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) return false;
    else return true;
  }
  if (i === num || num === 1) return true;
}

function printMul(num) {
  for (var i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}

while (1) {
  var userInp = rls.question(
    "Please enter a number (To exit please enter'N'): "
  );
  if (userInp === "N") break;
  var result = isPrime(Number(userInp));
  var adj = result ? "is a" : "Not a";
  console.log(`${userInp} ${adj} Prime Number`);
  if (result) printMul(Number(userInp));
}
