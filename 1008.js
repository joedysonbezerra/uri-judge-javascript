let input = require("fs").readFileSync("./input/1008.txt", "utf8");
let lines = input.split("\n");

const idEmployee = parseInt(lines.shift());
const hours = parseInt(lines.shift());
const perHourValue = parseFloat(lines.shift());

console.log(`NUMBER = ${idEmployee}`);
console.log(`SALARY = U$ ${(perHourValue * hours).toFixed(2)}`);
