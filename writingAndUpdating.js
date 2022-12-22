const fs = require('fs');

// const content = [{
//     type: "Node Application",
//     Name: "Narender Govindula"
// }];

// fs.writeFileSync('test.json',JSON.stringify(content));

const content = " New Changes ";

fs.writeFile('test1.txt', content, {flag:'a+'}, err => {
    if (err){
        console.log(err);
        return
    }
    console.log("Successfully Done!");
})
fs.writeFile('test1.txt', content, {flag:'a'}, err => {
    if (err){
        console.log(err);
        return
    }
    console.log("Successfully Done!");
})
fs.writeFile('test1.txt', content, {flag:'w+'}, err => {
    if (err){
        console.log(err);
        return
    }
    console.log("Successfully Done!");
})
fs.writeFile('test1.txt', content, {flag:'r+'}, err => {
    if (err){
        console.log(err);
        return
    }
    console.log("Successfully Done!");
})