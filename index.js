// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Enter a description of the project', 'Enter installation instructions',
    'Provide instructions and examples for us','What license is used?', 'Please enter your Github username', 'Please enter your email address',
    'Please enter contribution guidelines', 'Is there any test data?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, err => {
        if(err){
            console.log(err);
        }
        console.log("File created!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
        /* Pass your questions in here */
        ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        })

};

// Function call to initialize app
init();
