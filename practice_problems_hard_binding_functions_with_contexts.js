// let obj = {
//   message: 'JavaScript',
// };

// function foo() {
//   console.log(this.message);
// }

// foo.bind(obj);

// // does not output anything because `bind` does not invoke the function

// let obj = {
//   a: 2,
//   b: 3,
// };

// function foo() {
//   return this.a + this.b;
// }

// let bar = foo.bind(obj);

// console.log(bar());

// // 5


// let positiveMentality = {
//   message: 'JavaScript makes sense!',
// };

// let negativeMentality = {
//   message: 'JavaScript makes no sense!',
// };

// function foo() {
//   console.log(this.message);
// }

// let bar = foo.bind(positiveMentality);

// negativeMentality.logMessage = bar;
// negativeMentality.logMessage();

// // Js makes sense

let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);

// amazebulous