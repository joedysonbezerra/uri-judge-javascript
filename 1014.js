let input = require("fs").readFileSync("./input/1014.txt", "utf8");
let lines = input.split("\n");

const travelledDistance = parseInt(lines.shift());
const totalFuel = parseFloat(lines.shift());

console.log(`${(travelledDistance / totalFuel).toFixed(3)} km/l`);
