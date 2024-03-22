const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    let newPrice = this.price;
    const discount = this.price * percent / 100;
    newPrice -= discount;

    return newPrice;
  },
};


console.log(item.discount(20));  // should return 40
console.log(item.discount(50));   // should return 25
console.log(item.discount(25));   // should return 37.5

// the discount method mutates the price attribute of the item object so after each method invocation, the price
// does not change back to its original value of 50.
// to solve this, we create a new variable to hold the item's price and then return the discount on that