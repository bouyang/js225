function newStack() {
  let stack = [];

  return {
    push(value) {
      stack[stack.length] = value;
    },

    pop() {
      let last = stack[stack.length - 1];
      stack.splice(stack.length - 1, 1);
      return last;
    },

    printStack() {
      for (let i = 0; i < stack.length; i += 1) {
        console.log(stack[i]);
      }
    },
  };
}