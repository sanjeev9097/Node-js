// Print the hello world on to the screen without using browser  cmd is node projectName 

console.log('Hello World')

// Create a file and write the content 
const fs = require('fs');

fs.writeFileSync('Hello.txt', "Welcome to node.js");