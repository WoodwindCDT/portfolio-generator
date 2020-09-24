// Global Const/Var
// Const fs required by node to enable writeFile
const fs = require('fs');
// Specifies to require constant module.export to (local Path)
// No Module.export is on this file, so create that on the new local Path file
const generatePage = require('./src/page-template.js');

// Getting data from terminal in process event
// Slice = 2, Capturing 2 expected arguments
const profileDataArgs = process.argv.slice(2);

// Translating data from profileDataArgs 
// into two different variables
const [name, github] = profileDataArgs;


// Creates write file
fs.writeFile('index.html', generatePage(name, github), err => {
    // Error Handling
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
});