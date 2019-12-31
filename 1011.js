let input = require("fs").readFileSync("./input/1011.txt", "utf8");
let lines = input.split("\n");

const radius = parseFloat(lines.shift());

console.log(
  `VOLUME = ${((4 / 3.0) * 3.14159 * Math.pow(radius, 3)).toFixed(3)}`
);
