const prompt=require('prompt-sync')();
const fs=require('fs');
writeData=require("./inventory");





// writeData.push(inventory);

// let obj=JSON.stringify(writeData);

// fs.writeFileSync("inventory.json",obj);



// var input=prompt("IF you want enter data, Press 1 Then  Exist Press 0: ");


do{
    let Pcode=prompt("Enter PCode:");
    let Desc=prompt("Enter Descripation:");
    let Category=prompt("Enter Category:");
    let Mrp=prompt("Enter MRP:");
    let Upc=prompt("Enter Upc:");

    var inventory={
        "Pcode":Pcode,
        "Desc":Desc,
        "Category":Category,
        "Mrp":Mrp,
        "Upc":Upc
    };

    writeData.push(inventory);
    obj=JSON.stringify(writeData);
    fs.writeFileSync("inventory.json",obj);

    input=prompt("IF you want enter data, Press 1 Then  Exist Press 0:");
}
while ( input ==  1  ) {
   
    let output=fs.readFileSync('inventory.json');

    let data=JSON.parse(output);

    console.log(data);
}





