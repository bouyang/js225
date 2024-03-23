// let account = {
//   balance: 0,
//   transactions: [],

//   deposit : function(value) {
//     this.balance += value;
//     this.transactions.push({
//       type: 'deposit',
//       amount: value,
//     });
//     return value;
//   },

//   withdraw: function(value) {
//     if (this.balance < value) {
//       value = this.balance;
//     }
//     this.balance -= value;
  
//     this.transactions.push({
//       type: 'withdraw',
//       amount: value,
//     });
  
//     return value;
//   },

// };

// console.log(account.balance);
// // 0
// console.log(account.deposit(12));
// // 12
// console.log(account.balance);
// // 12
// console.log(account.deposit(10));
// // 10
// console.log(account.balance);
// // 22




function makeAccount(number) {
  let balance = 0;
  let transactions = [];
  
  return {
  
    deposit(value) {
      balance += value;
      transactions.push({
        type: 'deposit',
        amount: value,
      });
      return value;
    },
  
    withdraw(value) {
      if (balance < value) {
        value = balance;
      }
      balance -= value;
    
      transactions.push({
        type: 'withdraw',
        amount: value,
      });
    
      return value;
    },

    balance() {
      return balance;
    },

    transactions() {
      return transactions;
    },

    number() {
      return number;
    },
  
  };
}

// let account = makeAccount();
// console.log(account.deposit(15));
// // 15
// console.log(account.balance);
// // 15
// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// // 0

function makeBank() {
  let accountNumber = 101;
  let accounts = [];

  return {

    openAccount() {
      let newAccount = makeAccount(accountNumber);
      accountNumber += 1;
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      source.balance -= amount;
      destination.balance += amount;
      return amount;
    }
  };
}


// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.number);
// // 101
// console.log(bank.accounts);
// // [{...}]
// console.log(bank.accounts[0]);
// // {
// //  number: 101,
// //  balance: 0,
// //  transactions: [],
// //  deposit: [Function: deposit],
// //  withdraw: [Function: withdraw]
// // }
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // 102

// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance());
// // 3
// console.log(destination.balance());
// // 7

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.balance());
// // 0
// console.log(account.deposit(17));
// // 17
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// // 102
// console.log(account.transactions());
// // [{...}]


let bank = makeBank();
console.log(bank.accounts);
// undefined