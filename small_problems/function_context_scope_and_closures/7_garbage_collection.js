function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// more code

// it will not be GC'ed because it is included in the closure of the function that is returned by the makeArrays call
// which is stored in pushIt