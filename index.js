const prompt=require('prompt-sync')();
const { log } = require('console');
const fs=require('fs');
writeData=require("./inventory");
var inventory_file= require("./inventory_file");


console.log("1 - Inventory entiers:");
console.log("2 - Display inventory:");
console.log("3 - Search by Category:");
let process=parseFloat( prompt("Enter the Operation as Press " ));
switch (process) {
    case 1:
        inventory_file.inventoryRegister();
        break;
    case 2:
        let output=fs.readFileSync('inventory.json');
    
        let data=JSON.parse(output);
    
        console.table(data);
        break;


    case 3:
        console.log("1.Pcode");
        console.log("2.Category");
        console.log("3.Mrp");
        console.log("4.Upc");
        let category = prompt("Type filter Data: ");
        let outputData=fs.readFileSync('inventory.json');
        
        let print =JSON.parse(outputData);
        if(category == "Pcode" ){
            let categorydata= prompt("Type Pcode:");
            let filter=print.filter(function(element) {
                return element.Pcode == categorydata;
            });
            console.table(filter);
        }
        else if(category == "Category" ){
            let categorydata= prompt("Type Category:");
            
            let filter=print.filter(function(element) {
                return element.Category == categorydata;
            })
            console.table(filter);
        }
        else if(category == "Mrp" ){
            let categorydata= prompt("Type Mrp:");

            let filter=print.filter(function(element) {
                return element.Mrp == categorydata;
            })
            console.table(filter);
        }
        else if(category == "Upc" ){
            let categorydata= prompt("Type Upc:");

            let filter=print.filter(function(element) {
                return element.Upc == categorydata;
            })
            console.table(filter);
        }
        else{
            console.log("Enter the filter data");
        }
        break;

    default:
        console.log("enter the values");
        break;
}





