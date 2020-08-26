var readlineSync = require("readline-sync");

console.log("");
console.log(" ----- Objective: Check if the number is multiple of 11 ---");
console.log("Keeps asking user until the entered number is divisible by 11");
console.log("");

var userInp, result;
while (1) {
  userInp = Number(readlineSync.question("Enter a Number: "));
  if (!(userInp % 11)) break;
  else console.log(`${userInp} is not a multiple of 11. Try Again`);
}
