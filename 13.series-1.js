var rls = require("readline-sync");

console.log("Sequence :  4,16,64,256,1024,4096,16384.,......., 4^N");
var input = Number(
  rls.question(
    "Please input a number to check if it falls in above sequence : "
  )
);

if ((Math.log(input) / Math.log(4)) % 1 === 0) console.log("yes");
else console.log("no");
