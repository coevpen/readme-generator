//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = ['What is the title of your project?', 'Enter a description of the project:', 'Enter installation instructions:',
    'Provide usage instructions and examples for us:','What license is used?', 'Please enter your Github username:', 'Please enter your email address:',
    'Please enter contribution guidelines:', 'Is there any test data?'];

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
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
                validate: installation => {
                    if(installation){
                        return true;
                    }
                    else{
                        console.log("Please enter installation instructions.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
                default: 'N/A'
            },
            {
                type: 'checkbox',
                name: 'license',
                message: questions[4],
                choices: ['placeholder 1', 'placeholder 2','placeholder 3', 'None']
                
            },
            {
                type: 'input',
                name: 'username',
                message: questions[5],
                validate: username => {
                    if(username){
                        return true;
                    }
                    else{
                        console.log("Please enter your Github username.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: questions[6],
                validate: email => {
                    if(email){
                        return true;
                    }
                    else{
                        console.log("Please enter an email address for contact.");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contribution',
                message: questions[7],
                default: 'N/A'
            },
            {
                type: 'input',
                name: 'test',
                message: questions[8],
                default: 'N/A'
            },
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