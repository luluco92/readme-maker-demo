const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
var userinput;

const questions = [
    {
      type: 'input',
      message: 'Enter the Project Title.',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter the Project Description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter the Installation Instructions',
      name: 'install',
    },
    {
      type: 'input',
      message: 'Enter the Usage Information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter the Contribution Guidelines',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Enter the Testing Instructions',
      name: 'testing',
    },
    {
      type: 'list',
      message: 'Pick a License',
      name: 'license',
      choices:['none', 'MIT', 'ISC', 'Apache'],
    },
    {
      type: 'input',
      message: 'Enter your github username',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter your email',
      name: 'email',
    },
  ];





function writetoFile(fileName, data) {
     fs.appendFile(fileName, data + "\n", (error) => error ? console.error(error) : console.log('...'));
}




function init() {
inquirer
  .prompt(questions)
  .then((response) => {
     console.log(response);

     writetoFile('README.md', markdown.generateMarkdown(response));

  });


}




init();