const reverseNumber = function (num) {
  let reverseNum = 0;

  while (num !== 0) {
    reverseNum = reverseNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return reverseNum;
};

console.log(reverseNumber(571));
