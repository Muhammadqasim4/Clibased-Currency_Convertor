#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1, //base rate
    USD: 0.0036,
    EUR: 0.0033,
    CHY: 0.026,
    INR: 0.30,
    AFN: 0.26,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency:",
        type: "list",
        choices: ["PKR", "USD", "EUR", "CHY", "INR", "AFN"],
    },
    {
        name: "to",
        message: "Enter to currency:",
        type: "list",
        choices: ["PKR", "USD", "EUR", "CHY", "INR", "AFN"],
    },
    {
        name: "amount",
        message: "Enter your amount:",
        type: "number",
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Finally Your amount is converted ${convertedAmount.toFixed(2)}`);
