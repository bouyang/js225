function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  }
}


let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(myBind(function(number) {
      return this.name + ' ' + number;
    }, this));
  },
};

console.log(franchise.allMovies());