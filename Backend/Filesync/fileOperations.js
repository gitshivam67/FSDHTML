const fs=require('fs')
fs.writeFileSync("data.txt","Hello writing date using node Js")
console.log("Data Written successfully");

const rd=fs.readFileSync("data.txt",{encoding:'utf-8'});
console.log(rd);