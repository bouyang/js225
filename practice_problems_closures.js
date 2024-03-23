// function makeMultipleLister(num) {
//   return function() {
//     for (let i = 0; i < 100; i += 1) {
//       if (i % num === 0) {
//         console.log(i);
//       }
//     }
//   };
// }

// let lister = makeMultipleLister(13);
// lister();

// let val = 0;

// function add(num) {
//   return val += num;
// }

// function subtract(num) {
//   return val -= num;
// }



// console.log(add(1));

// console.log(add(42));

// console.log(subtract(39));

// console.log(add(6));

function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  };
}

let ready = startup();
// let systemStatus = // no way to do this