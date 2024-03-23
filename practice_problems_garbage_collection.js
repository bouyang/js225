// JS will periodically deallocate the memory locations of primitives and objects that are no longer needed

// let myNum = 1;

// function foo() {
//   let myArr = ['this is an array'];
//   // what is eligible for GC here?
// }

// foo();

// // what is eligible for GC here?

// // more code

// // the array is eligible for GC only on line 10

// function makeGreeting() {
//   let foo = { greeting: 'hello' };
//   return function(name) {
//     foo.name = name;
//     return foo;
//   };
// }

// let greeting = makeGreeting();

// // is the object eligible for GC here?

// // more code

// // not eligible because the function that makeGreeting returns is assigned to greeting on line 9 and foo is
// // in the closure of that function

let bash = {};

// only until after the program is done