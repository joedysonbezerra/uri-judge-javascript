let input = require("fs").readFileSync("./input/1002.txt", "utf8");
let lines = input.split("\n");

const n = 3.14159;
const raio = parseFloat(lines.shift());
console.log(`A=${(n * Math.pow(raio, 2)).toFixed(4)}`);
