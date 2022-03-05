const getNthRoot = function (number, n) {
  let result = number;
  for (let index = 1; index < n; index++) {
    result = result ** (1 / 2);
  }
  return result;
};

console.log(getNthRoot(16, 2));
console.log(getNthRoot(81, 3));
