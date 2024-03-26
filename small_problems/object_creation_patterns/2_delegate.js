/*
  delegate: takes the method from an object and assigns it to the calling property as a new method
*/

function delegate(obj, method, ...args) {
  return function() {
    obj[method].apply(obj, args);
  }
}


const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'