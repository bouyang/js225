// function whatIsMyContext() {
//   return this;
// }

// whatIsMyContext();

// // global object window

// function foo() {
//   function bar() {
//     function baz() {
//       console.log(this);
//     }

//     baz();
//   }

//   bar();
// }

// foo();

// // global object window. baz is invoked with the implicit context of the global object

// let obj = {
//   count: 2,
//   method() {
//     return this.count;
//   },
// };

// obj.method();

// // obj

// function foo() {
//   console.log(this.a);
// }

// let a = 2;
// foo();

// // in strict mode, we are trying to access a property of underfined so an error will be produced
// // because this refers to the implicit context of the global object but in strict mode it is undefined

// let a = 1;
// function bar() {
//   console.log(this.a);
// }

// let obj = {
//   a: 2,
//   foo: bar,
// };

// obj.foo();

// // 2
// // the context is the object obj, implicit execution context for a method invocation is the calling obj

// let foo = {
//   a: 1,
//   bar() {
//     console.log(this.baz());
//   },

//   baz() {
//     return this;
//   },
// };

// foo.bar();
// let qux = foo.bar;
// qux();

// // foo obj
// // when you extract a method from its object, it loses that context so when qux is invoked, this refers to the
// // global object window and there is no baz function as a property of window so it gives an error

// let myObject = {
//   count: 1,
//   myChildObject: {
//     myMethod() {
//       return this.count;
//     },
//   },
// };

// console.log(myObject.myChildObject.myMethod.call(myObject));

// // this refers to the calling object (myChildObject) which does not have a property count so it returns undefined

// let person = {
//   firstName: 'Peter',
//   lastName: 'Parker',
//   fullName() {
//     console.log(this.firstName + ' ' + this.lastName +
//                 ' is the Amazing Spiderman!');
//   },
// };

// let whoIsSpiderman = person.fullName.bind(person);
// whoIsSpiderman();

// // peter parker is the amazing spiderman


let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log(computer.total());

// 30000 + 2000 + 3000 - 0

