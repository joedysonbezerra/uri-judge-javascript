let input = require("fs").readFileSync("./input/1012.txt", "utf8");
let lines = input.split(" ");

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const c = parseFloat(lines.shift());

console.log(`TRIANGULO: ${((a * c) / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(3.14159 * Math.pow(c, 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${(((a + b) * c) / 2).toFixed(3)}`);
console.log(`QUADRADO: ${Math.pow(b, 2).toFixed(3)}`);
console.log(`RETANGULO: ${(a * b).toFixed(3)}`);
