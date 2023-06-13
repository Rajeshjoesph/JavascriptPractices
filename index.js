const prompt=require('prompt-sync')();
const fs=require('fs');
writeData=require("./inventory");

let Pcode=prompt("Enter PCode:");
let Desc=prompt("Enter Descripation:");
let Category=prompt("Enter Category:");
let Mrp=prompt("Enter MRP:");
let Upc=prompt("Enter Upc:");

var json={
    "Pcode":Pcode,
    "Desc":Desc,
    "Category":Category,
    "Mrp":Mrp,
    "Upc":Upc
};

writeData.push(json);

let obj=JSON.stringify(writeData);

fs.writeFileSync("inventory.json",obj);

let output=fs.readFileSync('inventory.json');

let data=JSON.parse(output);
console.log(data);