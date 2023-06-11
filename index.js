const prompt = require('prompt-sync')();

// declear array
const array=[];

console.log("Enter the array length:");
// array length
let length=prompt();

console.log("Enter the array Data:");

for(let i=0;i<=length;i++){
    array[i]=prompt();
}

console.log(array);

