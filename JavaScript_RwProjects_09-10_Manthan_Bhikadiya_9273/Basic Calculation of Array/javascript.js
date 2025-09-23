let input = prompt("Enter numbers separated by commas (ex, 10,20,30):");

let arr = input.split(",").map(Number);

let length = arr.length;
let sum = arr.reduce((a, b) => a + b, 0);
let average = sum / length;
let max = Math.max(...arr);
let min = Math.min(...arr);

console.log("Array:", arr);
console.log("Sum:", sum);
console.log("Average:", average);
console.log("Max:", max);
console.log("Min:", min);