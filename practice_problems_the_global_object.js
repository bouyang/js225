// without strict mode, the window is the global object. With strict mode, it is not accessible

// a = 10;

// console.log(window.a === a);

// // true

// "use strict"

// a = 10;

// console.log(window.a === a);

// // produces an error because in strict mode, you cannot declare variable without const, let, var, or function

// function func() {
//   let b = 1;
// }

// func();

// console.log(b);

// // invoking the func function will declare a variable b in the local scope
// // when b is logged in the outer(global) scope, b was not declared so it will result in an error

// function func() {
//   b = 1;
// }

// func();

// console.log(b);

// // In contrast to the previous question, when the function is invoked and the line b = 1 is executed, because b
// // was not declared, it will be created as a property of the global object so can be logged later in the outer scope

"use strict"

function func() {
  b = 1;
}

func();

console.log(b);

// With strict mode, we cannot access a variable that has not been declared and it will not be created as
// a property on the global object. Thus, it will produce an error on the line b = 1 because b was not
// declared yet