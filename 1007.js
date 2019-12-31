let input = require("fs").readFileSync("./input/1007.txt", "utf8");
let lines = input.split("\n");

const a = parseInt(lines.shift());
const b = parseInt(lines.shift());
const c = parseInt(lines.shift());
const d = parseInt(lines.shift());

console.log(`DIFERENCA = ${a * b - d * c}`);
