const isPrime = function (number) {
  if (number === 1) {
    return false;
  }

  for (let index = 2; index <= number / 2; index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
};

const findAllPrimes = function (number) {
  const numbers = [];
  for (let index = 1; index <= number; index++) {
    numbers.push(index);
  }
  const primes = numbers.filter((number) => isPrime(number));
  return primes;
};
const main = function (number) {
  const primes = findAllPrimes(number);
  return primes;
};

console.log(main(+process.argv.slice(2)));
