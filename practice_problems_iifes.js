// (function() {
//   console.log("Sometimes, syntax isn't intuitive!")
// })();

// // will not work because function must be expression

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// // sum += sum(numbers);  // ?

// console.log(sum);

// // The function sum cannot be named that because sum has already been declared
// // so on line 16 you will get an error

// function countdown(num) {
//   (function(num) {
//     for (let i = num; i >= 0; i -= 1) {
//       console.log(i);
//     }
//     console.log('Done!');
//   })(num);
// }

// countdown(7);

// (function foo() {
//   console.log('Bar');
// })();

// foo() // ?

// // not in global scope

function countdown(num) {
  (function logNum(n) {
    if (n < 0) {
      console.log('Done!');
    } else {
      console.log(n);
      logNum(n - 1);
    }
  })(num);
}

countdown(7);