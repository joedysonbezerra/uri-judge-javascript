let input = require("fs").readFileSync("./input/1013.txt", "utf8");
let lines = input.split(" ");

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const c = parseFloat(lines.shift());

const higherNumberBetweenAB = (a + b + Math.abs(a - b)) / 2;

console.log(
  `${higherNumberBetweenAB < c ? c : higherNumberBetweenAB} eh o maior`
);
