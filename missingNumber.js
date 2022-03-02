/*
Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. 
Find the missing element.
*/

const findMissingNumber = function (array) {
  const n = array.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const sum = array.reduce((c, e) => (c += e), 0);
  return totalSum - sum;
};

console.log(findMissingNumber([6, 1, 2, 8, 3, 4, 7, 10, 5]));
