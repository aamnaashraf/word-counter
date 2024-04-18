#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red("*** Welcome to Word counter app!***\n"));

const answers: {
    Sentence: string
} = await inquirer.prompt([
        {
         name: "Sentence",
         type: "input" ,
         message: (chalk.yellow("Please enter your sentence to count the words!")),
        }
])
const words = answers.Sentence.trim().split(" ")

console.log(chalk.green(words));
console.log(chalk.red(`Your sentence word count is: ${words.length}`));