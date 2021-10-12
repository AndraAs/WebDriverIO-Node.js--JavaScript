//block of code
//var - global if it is declared in the global level/ functional level
//let -global/block level {}
//let cannot be redeclared
//var can be redeclared
//let and var can be reinitialised
// const almost same as let BUT it cannot be reinitialised

let greet = "Evening";
greet = "Night";

if (1 == 1) {
  let greet = "Afternoon";
}
function add(a, b) {
  var greet = "Morning";
  return a + b;
}
let sum = add(2, 3);
console.log(sum);
console.log(greet);
//anonymous function -> functions that don't have name
//Anonymous functions can be assigned to variables:
let sumOfIntegers = function (c, d) {
  return c + d;
};
//anonymous function
let sumOfNumbers = (c, d) => c + d;
console.log(sumOfNumbers(1, 1));
