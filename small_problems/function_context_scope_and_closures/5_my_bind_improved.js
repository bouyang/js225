function myBind(func, context, ...args) {
  return function(...args2) {
    let allArgs = args.concat(args2);
    return func.apply(context, allArgs);
  }
}


function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15