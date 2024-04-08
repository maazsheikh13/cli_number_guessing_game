#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twellcome to codewithMaaz - CLI number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuestNumber",
        type: "number",
        message: "Enter your guest number(number limits from 1 to 5):",
    },
]);
if (answer.userGuestNumber === randomNumber) {
    console.log("congratulations ! you got the correct guest number.");
}
else {
    console.log("sorry! you got the wrong guest number.");
}
