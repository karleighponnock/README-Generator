
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require('inquirer');
// array of questions for user




const questions = [
    {
        name: "description",
        type: "input",
        message: "Describe this project"
    },
    {
        name: "tableOfContents",
        type: "input",
        message: "Table Of Contents"
    },
    {
        name: "installation",
        type: "input",
        message: "Installation"
    },
    

    // Usage
    // License
    // Contributing
    // Tests
    // Questions

];

function prompt() {
    inquirer.prompt(questions)
        .then(answers => {
            // Use user feedback for... whatever!!
            console.log(answers)
            const text = generateMarkdown(answers)
            writeToFile("README2.md", text);
        })
        .catch(error => {
            console.log(error)
        });
}


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}


// function to initialize program
function init() {
    prompt();

}

// function call to initialize program
init();
