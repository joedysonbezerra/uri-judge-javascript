let input = require("fs").readFileSync("./input/1003.txt", "utf8");
let lines = input.split("\n");

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());

console.log(`SOMA = ${a + b}`);
