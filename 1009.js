let input = require("fs").readFileSync("./input/1009.txt", "utf8");
let lines = input.split("\n");
lines.shift();

const salary = parseFloat(lines.shift());
const amount = parseFloat(lines.shift());

console.log(`TOTAL = R$ ${(salary + amount * 0.15).toFixed(2)}`);
