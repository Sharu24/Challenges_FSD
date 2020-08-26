var rls = require("readline-sync");

var arr = [],
  count = 0,
  res = "";

while (1) {
  var ele = rls.question("Enter the Array Element (d for done ): ");
  if (ele === "d") break;
  else arr.push(ele);
}
console.log(arr.filter((ele, idx) => arr.indexOf(ele) === idx));

arr.forEach((ele, idx) => {
  if (arr.indexOf(ele) !== idx) {
    count++;
  } else res += ele + ",";
});

console.log(`Removed ${count} duplicates, resultant array : [${res}]`);
