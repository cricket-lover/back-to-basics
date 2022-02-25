const getHollowLine = function (length, symbol) {
  return symbol.concat(" ".repeat(length - 2)).concat(symbol);
};

const getFilledLine = function (length, symbol) {
  return symbol.repeat(length);
};

const getHollowRectangle = function (length, breadth, symbol) {
  const filledLine = getFilledLine(length, symbol);
  const lines = [filledLine];
  for (let index = 0; index < breadth - 2; index++) {
    lines.push(getHollowLine(length, symbol));
  }
  lines.push(filledLine);

  return lines;
};

const getFilledRectangle = function (length, breadth, symbol) {
  const lines = [];
  for (let index = 0; index < breadth; index++) {
    lines.push(getFilledLine(length, symbol));
  }

  return lines;
};

const displayLines = function (lines) {
  for (let index = 0; index < lines.length; index++) {
    console.log(lines[index]);
  }
};

displayLines(getFilledRectangle(9, 5, "*"));
displayLines(getHollowRectangle(9, 5, "*"));
