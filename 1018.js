let input = require("fs").readFileSync("./input/1018.txt", "utf8");
const money = parseInt(input);

const resto100 = money % 100;
const resto50 = resto100 % 50;
const resto20 = resto50 % 20;
const resto10 = resto20 % 10;
const resto5 = resto10 % 5;
const resto2 = resto5 % 2;

console.log(money);
console.log(`${(money - resto100) / 100} nota(s) de R$ 100,00`);
console.log(`${parseInt(resto100 / 50)} nota(s) de R$ 50,00`);
console.log(`${parseInt(resto50 / 20)} nota(s) de R$ 20,00`);
console.log(`${parseInt(resto20 / 10)} nota(s) de R$ 10,00`);
console.log(`${parseInt(resto10 / 5)} nota(s) de R$ 5,00`);
console.log(`${parseInt(resto5 / 2)} nota(s) de R$ 2,00`);
console.log(`${parseInt(resto2 / 1)} nota(s) de R$ 1,00`);
