const isPalindrome = function (word) {
  const length = word.length - 1;
  for (let index = 0; index < length / 2 - 1; index++) {
    if (word[index] !== word[length - index]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("malayalam"));
