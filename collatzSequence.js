const collatzSequence = function (n, seq) {
  seq.push(n);
  if (n === 1) {
    return seq;
  }
  if (n % 2 === 0) {
    return collatzSequence(n / 2, seq);
  } else {
    return collatzSequence(3 * n + 1, seq);
  }
};

console.log(collatzSequence(2, []));
