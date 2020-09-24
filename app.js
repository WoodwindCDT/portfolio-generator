// Global Const/Var
// Const fs required by node to enable writeFile
//const fs = require('fs');
const inquirer = require('inquirer');

// Specifies to require constant module.export to (local Path)
// No Module.export is on this file, so create that on the new local Path file
//const generatePage = require('./src/page-template.js');

// Translating data from profileDataArgs 
// into two different variables
//const pageHTML = generatePage(name, github);


// Creates write file
//fs.writeFile('./index.html', pageHTML, err => {
  //if (err) throw err;

  //console.log('Portfolio complete! Check out index.html to see the output!');
//});

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
.then(answers => console.log(answers));