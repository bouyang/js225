let invoices = {
  unpaid: [],
  add: function(name, amount) {
    this.unpaid.push({
      name: name,
      amount: amount,
    });
  },
};

invoices.totalDue = function() {
  return this.unpaid.reduce((total, current) => total + current.amount, 0);
};

invoices.paid = [];

invoices.payInvoice = function(name) {
  let unpaidArr = [];
  this.unpaid.forEach(collectionEle => {
    if (collectionEle.name === name) {
      this.paid.push(collectionEle);
    } else {
      unpaidArr.push(collectionEle);
    }
  });

  this.unpaid = unpaidArr;
}

invoices.totalPaid = function() {
  return this.paid.reduce((total, current) => total + current.amount, 0);
};


invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
// console.log(invoices);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());

console.log(invoices.totalDue());

