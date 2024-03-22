function objectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1).sort();
  let keys2 = Object.keys(obj2).sort();
  let vals1 = Object.values(obj1).sort();
  let vals2 = Object.values(obj2).sort();

  for (let idx = 0; idx < keys1.length; idx += 1) {
    if (keys1[idx] !== keys2[idx] || vals1[idx] !== vals2[idx]) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false