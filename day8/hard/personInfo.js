/* Create an object literal called personAccount. It has firstName, lastName,
incomes, expenses properties and it has totalIncome, totalExpense,
accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set
of incomes and its description and expenses is a set of incomes and its
description.*/
const personAccount = {
    firstName: "Ras",
    lastName: "Bihari",
    incomes: [],
    expenses: [],
    totalIncome: function() {
        let total = 0;
        for (const income of this.incomes) {
            total += income.amount;
        }
        return total;
    },
    totalExpense: function() {
        let total = 0;
        for (const expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    },
    accountInfo: function() {
        return `Account Information:
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        Total Income: ${this.totalIncome()}
        Total Expense: ${this.totalExpense()}
        Account Balance: ${this.accountBalance()}`;
    },
    addIncome: function(description, amount) {
        this.incomes.push({ description, amount });
    },
    addExpense: function(description, amount) {
        this.expenses.push({ description, amount });
    },
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
};

personAccount.addIncome("Salary", 60000);
personAccount.addIncome("Freelancing", 15000);
personAccount.addExpense("Rent", 8000);
personAccount.addExpense("Food", 6000);
personAccount.addExpense("Transportation", 2000);

console.log(personAccount.accountInfo());
