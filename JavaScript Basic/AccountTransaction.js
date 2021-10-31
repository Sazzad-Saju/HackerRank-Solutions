console.log(`\n*******Account Transaction*******`)

class Account {
    constructor(balance) {
        this.balance = balance;
    }
    debit(amount) {
        if (amount > this.balance) {
            return false;
        } else {
            this.balance -= amount;
            return true;
        }
    }
    credit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}

//test-1
/*
let initialBalance = 1000
let myAc = new Account(initialBalance);
console.log(`Account created with initial balance of ${initialBalance}\n`);
let amount = 1000;
if (myAc.debit(amount)) {
    console.log(`${amount} debited\n`);
} else {
    console.log(`Insufficient balance\n`);
}
amount = 1000;
myAc.credit(amount);
console.log(`${amount} credited\n`);
const currentBalance = myAc.getBalance();
console.log(`Current balance is ${currentBalance}`);
*/

//test-2
let initialBalance = 10000
let myAc = new Account(initialBalance);
console.log(`Account created with initial balance of ${initialBalance}\n`);
let amount = 100000;
if (myAc.debit(amount)) {
    console.log(`${amount} debited\n`);
} else {
    console.log(`Insufficient balance\n`);
}
amount = 1000;
myAc.credit(amount);
console.log(`${amount} credited\n`);
const currentBalance = myAc.getBalance();
console.log(`Current balance is ${currentBalance}`);