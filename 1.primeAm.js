// jshint esversion:7
function checkPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function checkNarcissistic(num) {
  var tmp = num;
  var rem = 0,
    sum = 0,
    len = String(num).length;

  while (tmp) {
    rem = tmp % 10;
    tmp = Math.floor(tmp / 10);
    sum += rem ** len;
  }

  return sum === num ? true : false;
}

function checkNar(num) {
  var len = String(num).length;
  function sumNar(num, len) {
    if (num === 0) return 0;
    else return (num % 10) ** len + sumNar(Math.floor(num / 10), len);
  }
  return sumNar(num, len) === num ? true : false;
}

var readlineSync = require("readline-sync");
console.log("");
console.log(" ----- Objective: To check if the list of numbers has -----");
console.log(" ----- 1. Prime Numbers -----------------------------------");
console.log(" ----- 2. Narcissistic Numbers-----------------------------");
console.log(" ----- Update the Array and display wihtout those ---------");
console.log("");
var str = readlineSync.question("Enter the list of Numbers (Comma Separated):");

var inputArr = str.split(",");
var outArr = [],
  pCount = 0,
  nCount = 0;

var isPrime = false,
  isNar = false;

inputArr.forEach(ele => {
  isPrime = checkPrime(Number(ele));
  if (isPrime) pCount++;
  isNar = checkNar(Number(ele));
  if (isNar) nCount++;
  if (!isPrime && !isNar) outArr.push(ele);
});

console.log(`Prime Number Count : ${pCount}`);
console.log(`Narcissistic Number Count : ${nCount}`);
console.log(`The Updated Array : ${outArr}`);
