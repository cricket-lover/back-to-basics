const getFibonacciSeries = function (noOfTerms) {
  if (noOfTerms === 1) {
    return [0];
  }

  if (noOfTerms === 2) {
    return [0, 1];
  }

  const series = [0, 1];
  for (let index = 2; index < noOfTerms; index++) {
    series.push(series[index - 1] + series[index - 2]);
  }

  return series;
};

const noOfTerms = 9;
const fibonacciSeries = getFibonacciSeries(noOfTerms);
console.log(fibonacciSeries);
