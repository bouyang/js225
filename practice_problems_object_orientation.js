// let scissors = {
//   id: 0,
//   name: 'scissors',
//   stock: 8,
//   price: 10,
//   describeProduct() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: $${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   },
//   setPrice(newPrice) {
//     if (newPrice < 0) {
//       console.log('Price is invalid');
//     } else {
//       this.price = newPrice;
//     }
//   },
// };

// let drill = {
//   id: 1,
//   name: 'cordless drill',
//   stock: 15,
//   price: 45,
//   describeProduct() {
//     console.log(`Name: ${this.name}`);
//     console.log(`ID: ${this.id}`);
//     console.log(`Price: $${this.price}`);
//     console.log(`Stock: ${this.stock}`);
//   },
//   setPrice(newPrice) {
//     if (newPrice < 0) {
//       console.log('Price is invalid');
//     } else {
//       this.price = newPrice;
//     }
//   },
// };

// describeProduct(scissors);
// // => Name: Scissors
// // => ID: 0
// // => Price: $10
// // => Stock: 8

function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    describe() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log('Price is invalid');
      } else {
        this.price = newPrice;
      }
    },
  }
}

let scissors = createProduct(0, 'Scissors', 8, 10);