let input = require("fs").readFileSync("./input/1005.txt", "utf8");
let lines = input.split("\n");

const a = parseFloat(lines.shift()) * 3.5;
const b = parseFloat(lines.shift()) * 7.5;

console.log(`MEDIA = ${((a + b) / 11).toFixed(5)}`);
