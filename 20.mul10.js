/*
Write an algorithm to check
1.Whether the given input number is a multiple of 10.
2.If it is ​multiple ​of 10,  Multiply given input with number 10 without 
    using additionand multiplication operators. (NO * +)
3.If it is ​not multiple​ of 10, Multiply given input with number 8 without 
    using additionand multiplication operators. (NO * +)
*/

var rls = require("readline-sync");
var getSum = (n1, n2) => (n2 ? getSum(n1 ^ n2, (n1 & n2) << 1) : n1);

while (num !== "q") {
  var num = rls.question("Please enter a Number (type 'q' to quit) : ");

  if (!isNaN(parseInt(num))) {
    if (parseInt(num) % 10 === 0) {
      console.log(
        `Divisible by 10, ${num} * 10 = ${getSum(num << 1, num << 3)}`
      );
    } else if (num % 8 === 0) {
      console.log(`Divisible by 8, ${num} * 8 = ${num << 3}`);
    } else {
      console.log(`${num} is neither divisible by 10, nor by 8`);
    }
  }
}
