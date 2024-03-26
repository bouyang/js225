let ItemManager = (function() {

  return {
    items: [],

    create(itemName, category, quantity) {
      let notValid = {
        notValid: true,
      };

      if (itemName.replaceAll(' ', '').length >= 5) {
        this.itemName = itemName;
      } else {
        return notValid;
      }

      if (!category.match(/ /)) {
        this.category = category;
      } else {
        return notValid;
      }

      if (quantity !== undefined) {
        this.quantity = quantity;
      } else {
        return notValid;
      }

      this.skuCode = (itemName.slice(0, 3) + category.slice(0, 2)).toUpperCase();

      this.items.push({
        itemName,
        category,
        quantity,
        skuCode: this.skuCode,
      });
    },

    update(skuCode, obj) {
      this.items.forEach(item => {
        if (item.skuCode === skuCode) {
          for (let key in obj) {
            item[key] = obj[key];
          }
        }
      });
    },

    delete(skuCode) {
      this.items.forEach((item, idx) => {
        if (item.skuCode === skuCode) {
          this.items.splice(idx, 1);
        }
      });
    },

    inStock() {
      let result = [];
      this.items.forEach(item => {
        if (item.quantity > 0) {
          result.push(item);
        }
      });

      return result;
    },

    itemsInCategory(category) {
      let result = [];
      this.items.forEach(item => {
        if (item.category === category) {
          result.push(item);
        }
      });

      return result;
    }
  }
})();

let ReportManager = {
  items: [],

  init(itemObj) {
    this.items = itemObj.items;
  },

  createReporter(skuCode) {
    let target;

    this.items.forEach(item => {
      if (item.skuCode === skuCode) {
        target = item;
      }
    });

    return {
      itemInfo() {
        console.log(target.skuCode);
        console.log(target.itemName);
        console.log(target.category);
        console.log(target.quantity);
      }
    }
  },

  reportInStock() {
    let result = [];

    this.items.forEach(item => {
      if (item.quantity > 0) {
        result.push(item.itemName);
      }
    });

    return result.join(', ');
  }
}



console.log(ItemManager.create('basket ball', 'sports', 0));           // valid item
console.log(ItemManager.create('asd', 'sports', 0));
console.log(ItemManager.create('soccer ball', 'sports', 5));           // valid item
console.log(ItemManager.create('football', 'sports'));
console.log(ItemManager.create('football', 'sports', 3));              // valid item
console.log(ItemManager.create('kitchen pot', 'cooking items', 0));
console.log(ItemManager.create('kitchen pot', 'cooking', 3));          // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

console.log('-----------');

ReportManager.init(ItemManager);
console.log(ReportManager.reportInStock());
// logs soccer ball,football,kitchen pot

console.log('-----------');

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot

console.log('-----------');

console.log(ReportManager.reportInStock());
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

console.log('-----------');

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10