// higher-order functions work with other functions and can take functions as arguments and/or returns functions

// let numbers = [1, 2, 3, 4];
// function checkEven(number) {
//   return number % 2 === 0;
// }

// numbers.filter(checkEven); // [2, 4]

// filter is the higher-order function

// let numbers = [1, 2, 3, 4];
// function makeCheckEven() {
//   return function(number) {
//     return number % 2 === 0;
//   }
// }

// let checkEven = makeCheckEven();

// console.log(numbers.filter(checkEven)); // [2, 4]

// function execute(func, operand) {
//   return func(operand);
// }

// console.log(execute(function(number) {
//   return number * 2;
// }, 10)); // 20

// execute(function(string) {
//   return string.toUpperCase();
// }, 'hey there buddy'); // "HEY THERE BUDDY"

function makeListTransformer(func) {
  return function(args) {
    return args.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

console.log(timesTwo([1, 2, 3, 4])); // [2, 4, 6, 8]