var rls = require("readline-sync");
/*
Write an algorithm to sort the given array elements using Bubble sort 
in descendingorder and print the number of swaps happening.
●Note : The input array should be given as a command line. 
First take the lengthof the array from the user and the elements 
from the console.●The elements should be printed in descending order
 and total number of swaps
*/
function bubbleSort(arr) {
  var len = arr.length,
    swap = 0;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        swap++;
      }
    }
  }
  return [arr, swap];
}

console.log("----- Bubble Sort -----");
var arr = [];
var len = Number(
  rls.question("Please Enter the length of the Array to Sort : ")
);
while (len--) {
  arr.push(Number(rls.question(`Enter Array Elements :`)));
}

result = bubbleSort(arr);
console.log("Sorted Array    = ", result[0]);
console.log("Number of Swaps = ", result[1]);
// console.log(bubbleSort([2, 4, 44, 99, 3, 5, 0, -4, -100, 1]));
