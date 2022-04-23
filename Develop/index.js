// Steps to Solve
    // 1. User answers questions
        // inquirer prompt
    // 2. Pass answers in the .then() 
        // import generateMarkdown 
    // 3. Hand of to Generate Markdown to create MD syntax
    // 4. pass MD to writeTofile
    // console.log("in writetoFIle", var);
    // TODO: Include packages needed for this application

// const inquirer = require("inquirer");

    
    // TODO: Create an array of questions for user input
    // const questions = [];
    
    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {
        // use fs.writefile here
        // How do I use the markdown file here??
            // maybe a rest operator
            // import markdown functions
           
        
    // }


 // Inquirer and FS variables
 const inquirer = require('inquirer');
 const fs = require('fs');
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
 
 // TODO: Create a function to initialize app
 function init() {
     inquirer.prompt(questions)
         .then(function(answers){
         console.log(answers);
         var data = answers;
         writeToFile(data);
         console.log(data);
     }); 
 }
 
     



// TODO: Create a function to write README file
// arrow fx?  const writeToFile = (fileName, data) => {}
// const writeToFile = answers => {
//  return new Promise((resolve, reject) =>{
//      fs.writeFile('./generateREADME.md', fileContent, err => {
//          if(err){
//              reject (err);
//              return
//          }
//          resolve({
//              ok: true
//          })
//      })
//  })
// }

// fs.writeFile('./utils/generateMarkdown.md', JSON.stringify(answers), (err) =>
// err ? console.error(err) : console.log('Success!'));

init();

