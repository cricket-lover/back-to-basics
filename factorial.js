const factorialByWhile = function (number) {
  let result = 1;
  while (number !== 1) {
    result *= number;
    number--;
  }
  return result;
};

const factorial = function (number) {
  let result = 1;
  for (let index = 1; index <= number; index++) {
    result *= index;
  }
  return result;
};

const factorialByRecursion = function (number) {
  if (number === 1) {
    return number;
  }
  return number * factorialByRecursion(number - 1);
};

console.log(factorialByRecursion(7));
console.log(factorial(7));
console.log(factorialByWhile(7));
