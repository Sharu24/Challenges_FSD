var rsl = require("readline-sync");

var pSize = rsl.question("Enter Number of Elements : ");

function buildPattern(num, i = 1, tmp = 1) {
  if (!num) return;
  else {
    console.log(tmp);
    buildPattern(--num, ++i, i + "" + tmp);
  }
}

buildPattern(pSize);

// for (var i = 0; i < pSize; i++) {
//   console.log(`${i}`.repeat(i + 1));
// }
