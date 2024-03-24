const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${franchise.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());

// this refers to the global object where there is no property name, so it is undefined
