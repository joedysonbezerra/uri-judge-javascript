let input = require("fs").readFileSync("./input/1010.txt", "utf8");
let [valueProduct1, valueProduct2] = input.split("\n").map(product => {
  const [, quantity, value] = product.split(" ");
  return parseInt(quantity) * parseFloat(value);
});

console.log(`VALOR A PAGAR: R$ ${(valueProduct2 + valueProduct1).toFixed(2)}`);
