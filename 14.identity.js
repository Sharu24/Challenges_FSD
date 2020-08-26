var rsl = require("readline-sync");
var i = (j = 0),
  flag = true;
var mSize = Number(rsl.question("Please enter the size of the Matrix : "));
var mCount = mSize * mSize;
/*
while (mCount) {
  var ele = Number(rsl.question(`Enter the elements for ${i}st row: `));
  if (i === 1 || i === j + mSize + 1) {
    j = i;
    if (ele !== 1) flag = false;
  } else if (ele !== 0) flag = false;
  i++;
  mCount--;
}
*/

do {
  var ele = Number(rsl.question(`Enter the elements for ${j}st row: `));
  if (!i || i === j + mSize + 1) {
    j = i;
    if (ele !== 1) flag = false;
  } else if (ele) flag = false;
  i++;
} while (--mCount);

console.log(flag ? "Its an Identity Matrix" : "Its not an Identity Matrix");
