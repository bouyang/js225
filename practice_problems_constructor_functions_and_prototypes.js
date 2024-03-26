// let a = 1;
// let foo;
// let obj;

// function Foo() {
//   this.a = 2;
//   this.bar = function() {
//     console.log(this.a);
//   };
//   this.bar();
// }

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);

// // 2
// // 2
// // 2
// // 2
// // 2
// // 2

// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// // NaN
// // NaN

// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.area = function() {
//   return Math.PI * this.radius * this.radius;
// }

// let a = new Circle(3);
// let b = new Circle(4);

// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27


// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());

// // true

// let ninja;
// function Ninja() {
//   this.swung = true;
// }

// ninja = new Ninja();

// Ninja.prototype = {
//   swingSword: function() {
//     return this.swung;
//   },
// };

// console.log(ninja.swingSword());

// // error; the prototype was re-assigned to a different object and ninja did not inherit the function

// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }

// ninjaA = new Ninja();
// ninjaB = new Ninja();

// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung

// Ninja.prototype.swing = function() {
//   this.swung = true;
//   return this;
// }

// console.log(ninjaA.swing().swung);      // must log true
// console.log(ninjaB.swing().swung);      // must log true

// let ninjaA = (function() {
//   function Ninja(){};
//   return new Ninja();
// })();

// let ninjaB = new (ninjaA.constructor);

// console.log(ninjaB.constructor === ninjaA.constructor);    // should log true

// let shape = {
//   getType: function() {
//     return this.type;
//   },
// }

// function Triangle(a, b, c) {
//   Object.setPrototypeOf(this, shape);
//   this.a = a;
//   this.b = b;
//   this.c = c;
//   this.type = 'triangle';
// }

// shape.getPerimeter = function() {
//   return this.a + this.b + this.c;
// }

// Triangle.prototype.constructor = Triangle;

// let t = new Triangle(3, 4, 5);
// console.log(t.constructor);                 // Triangle(a, b, c)
// console.log(shape.isPrototypeOf(t));        // true
// console.log(t.getPerimeter());              // 12
// console.log(t.getType());                   // "triangle"

// console.log("Hello".constructor.name);
// console.log([1,2,3]);
// console.log({name: 'Srdjan'});

// function User(first, last) {
//   if (!(this instanceof User)) {
//     return new User(first, last);
//   }

//   this.name = first + ' ' + last;
// }

// let name = 'Jane Doe';
// let user1 = new User('John', 'Doe');
// let user2 = User('John', 'Doe');

// console.log(name);         // => Jane Doe
// console.log(user1.name);   // => John Doe
// console.log(user2.name);   // => John Doe

// function createObject(obj) {
//   let create = function() {
//   }
//   create.prototype = obj;
//   return new create();

//   // let result = {};
//   // Object.setPrototypeOf(result, obj);

//   // return result;
// }

// let foo = {
//   a: 1
// };

// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar));         // true


// let foo = {
//   a: 1,

//   begetObject() {
//     let newObj = {};

//     Object.setPrototypeOf(newObj, this);

//     for (prop in this) {
//       newObj[prop] = this[prop];
//     }

//     return newObj;
//   },
// };

// let bar = foo.begetObject();
// console.log(foo.isPrototypeOf(bar));         // true

function neww(constructor, args) {
  let result = Object.create(constructor.prototype);
  
  constructor.call(result, ...args);

  return result;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor);         // Person(firstName, lastName) {...}