let input = require("fs").readFileSync("./input/1001.txt", "utf8");
let lines = input.split("\n");

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

console.log(`X = ${a + b}`);
