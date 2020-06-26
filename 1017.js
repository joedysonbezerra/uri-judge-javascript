let input = require("fs").readFileSync("./input/1017.txt", "utf8");
const [time, km] = input.split("\n");

console.log(((parseInt(km) / 12) * parseInt(time)).toFixed(3));
