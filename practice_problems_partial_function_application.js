// function subtract(a, b) {
//   return a - b;
// }

// function makeSub() {
//   return function(num) {
//     return subtract(num, 5);
//   }
// }

// const sub5 = makeSub();

// console.log(sub5(10)); // 5
// console.log(sub5(20)); // 15

// function subtract(a, b) {
//   return a - b;
// }

// function makeSubN(n) {
//   return function(num) {
//     return subtract(num, n);
//   }
// }

// const sub4 = makeSubN(4);
// const sub7 = makeSubN(7);

// console.log(sub4(10)); // 6
// console.log(sub4(20)); // 16
// console.log(sub7(10)); // 3
// console.log(sub7(20)); // 13

// function makePartialFunc(func, b) {
//   return function(a) {
//     return func(a, b);
//   }
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// let multiplyBy5 = makePartialFunc(multiply, 5);
// let divideBy2 = makePartialFunc(divide, 2);

// console.log(multiplyBy5(100)); // 500
// console.log(divideBy2(100)); // 

// func and b are inclued in the closure when the function(a) is returned

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(listOfStudents) {
    rollCall('Math', listOfStudents);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan