
 // Inquirer and FS variables
 const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// question array

const questions = [
 {
     type: 'input',
     name: 'title',
     message: 'What is the name of the project'
 },
 {
     type: 'input',
     name: 'description',
     message: 'What does your application do?'
 },
 {
     type: 'list',
     name: 'license',
     message: 'Which license does your project use?',
     choices: ['None', 'MIT', 'Apache 2.0', 'GNU General Public License v3.0']
 },
 {
     type: 'input',
     name: 'email',
     message: 'What is your email?'
 },
 {
     type: 'input',
     name: 'username',
     message: 'What is your GitHub username?'
 },
 {
     type: 'list',
     name: 'wizard',
     message: 'Are you a magical wizard?',
     choices: ['Yes', 'No']
 }
]
 
// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};


// TODO: Create a function to initialize app
 function init() {
     inquirer.prompt(questions)
         .then(function(answers){
            console.log(answers);
         var data = generateMarkdown(answers);
         writeToFile(data);
         console.log(data);
     }); 
 }
 

init();

