let Account = (function() {

  function anonymize() {
    let seq = '';
  
    seq += String(Math.random().toFixed(17)).slice(2);
  
    return seq;
  }

  return {
    firstName(password) {
      if (password === this.userPassword) {
        return this.userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName(password) {
      if (password === this.userPassword) {
        return this.userLastName;
      } else {
        return 'Invalid Password';
      }
    },

    email(password) {
      if (password === this.userPassword) {
        return this.userEmail;
      } else {
        return 'Invalid Password';
      }
    },

    resetPassword(password, newPassword) {
      if (password === this.userPassword) {
        this.userPassword = newPassword;
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    reanonymize(password) {
      if (password === this.userPassword) {
        this.displayName = anonymize();
        return true;
      } else {
        return 'Invalid Password';
      }
    },

    init(userEmail, userPassword, userFirstName, userLastName) {
      this.userEmail = userEmail;
      this.userPassword = userPassword;
      this.userFirstName = userFirstName;
      this.userLastName = userLastName;
      this.displayName = anonymize();
      return this;
    },
  }
})();


// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'