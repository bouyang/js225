// function foo() {
//   return this;
// }

// let context = foo();
// console.log(context);

// // window

// // in strict mode, will be undefined

// let obj = {
//   foo() {
//     return this;
//   },
// };

// let context = obj.foo();

// console.log(context);

// // becuase foo is a method invocation, the context is the calling object so would be obj

// var message = 'Hello from the global scope!';

// function deliverMessage() {
//   console.log(this.message);
// }

// deliverMessage();

// let bar = {
//   message: 'Hello from the function scope!',
// };

// bar.deliverMessage = deliverMessage;

// bar.deliverMessage();

// // hello global (implicit exeuction context is global)
// // hello function (implicit execution context is calling object)

// var a = 10;
// let b = 10;
// let c = {
//   a: -10,
//   b: -10,
// };

// function add() {
//   return this.a + b;
// }

// c.add = add;

// console.log(add());
// console.log(c.add());

// // 20
// // 0

// // when using let, it is not a property of the global object so when the implicit execution context is global for
// // the funciton invocation add, this.a will refer to undefined?

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//    a: 'abc',
//    b: 'def',
//    add() {
//      return this.a + this.b;
//    },
// };

// console.log(bar.add.call(foo));

// // 3

let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

outputList.apply(fruitsObj, fruitsObj.list);

// arguments comes in as an array already and want to keep it as an array so it can be iterate through
// later with the forEach method