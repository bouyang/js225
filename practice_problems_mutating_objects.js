// let message = 'Hello from the global scope!';

// function func(message) {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func(message);
// console.log(message);

// // hello from the function scope
// // hello from the global scope

// let myObj = { message: 'Greetings from the global scope!' };

// function func(obj) {
//   obj.message = 'Greetings from the function scope!';
//   console.log(obj.message);
// }

// func(myObj);

// console.log(myObj.message);

// greetings from the function scope
// greetings from the function scope

// the message attribute of the object passed into the func function was mutated when it was re-assigned to
// 'greetings form the function scope'

// let message = 'Hello from the global scope!';

// function func() {
//   message = 'Hello from the function scope!';
//   console.log(message);
// }

// func();
// console.log(message);

// // hello from the function scope
// // hello from the function scope

// let a = 10;
// let obj = {
//   a
// }

// let newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a);
// console.log(newObj.a === obj.a);

// // false
// // true

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

// when animal is re-assigned to Timon, the obj that animal was referencing which is warthog's value is now
// referncing a different obj as meerkat