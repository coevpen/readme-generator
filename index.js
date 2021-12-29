//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = ['What is the title of your project?', 'Enter a description of the project', 'Enter installation instructions',
    'Provide instructions and examples for us','What license is used?', 'Please enter your Github username', 'Please enter your email address',
    'Please enter contribution guidelines', 'Is there any test data?'];

// Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if(err){
            console.log(err);
        }
        console.log("File created!");
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
                validate: titleInput => {
                    if(titleInput){
                        return true;
                    }
                    else{
                        console.log('Please enter a project title.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
                validate: descrip => {
                    if(descrip){
                        return true;
                    }
                    else{
                        console.log("Please enter a description of your project.");
                        return false;
                    }
                }
            }
        ])
};

// Function call to initialize app
init()
    .then(data =>{
        console.log(data);
        return generateMarkdown(data);
    })
    .then(readmeFile =>{
        console.log(readmeFile);
        return writeToFile(readmeFile);
    })
    .catch(err => {
        console.log(err);
    });