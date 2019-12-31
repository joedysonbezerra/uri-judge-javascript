let input = require("fs").readFileSync("./input/1006.txt", "utf8");
let lines = input.split("\n");

const a = parseFloat(lines.shift()) * 2;
const b = parseFloat(lines.shift()) * 3;
const c = parseFloat(lines.shift()) * 5;

console.log(`MEDIA = ${((a + b + c) / 10).toFixed(1)}`);
