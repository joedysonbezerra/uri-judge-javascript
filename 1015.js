const input = require("fs").readFileSync("./input/1015.txt", "utf8");
const [[x1, y1], [x2, y2]] = input.split("\n").map((line) => line.split(" "));

console.log(
  Math.sqrt(
    Math.pow(parseFloat(x2) - parseFloat(x1), 2) +
      Math.pow(parseFloat(y2) - parseFloat(y1), 2)
  ).toFixed(4)
);
