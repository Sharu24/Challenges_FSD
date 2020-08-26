var rls = require("readline-sync");
var magix = [],
  i = 0,
  j = 0,
  val = 0;

var mSize = Number(rls.question("Please enter the size of the matrix :"));

var sum = Array(mSize * 2 + 2).fill(0);

var mCount = mSize * mSize;

for (var k = 1; k <= mCount; k++) {
  if (k % mSize === 1) {
    j = 0;
    i = Math.floor(k / mSize);
    magix[i] = new Array(2);
  }
  val = Number(rls.question(`Please Enter Element #[${i}][${j}] :`));

  magix[i][j] = val;

  sum[i] += val;
  sum[mSize + j] += val;
  if (i === j) sum[mSize * 2] += val;
  if (i === mSize - 1 - j) sum[mSize * 2 + 1] += val;

  j++;
}
console.log(magix);
console.log(
  sum.every(ele => ele === sum[0])
    ? "Its a Magic Square"
    : "Its not a Magix Square"
);
