const path = require('path')

//basename
file = path.basename('test.txt');

//dirname  directoryname method
file = path.dirname('Tutorial/test.json');

//isAbsoluteMethod
file = path.isAbsolute('E:/NewNode/New-Node-Js/test.json');

//join
let dir = 'Narender'
file = path.join('C:','Users/Narender/Desktop', dir, 'test.json');

//parse
file = path.parse('E:/NewNode/New-Node-Js/test.json');

//resolve
file = path.resolve('E:/NewNode/New-Node-Js/test.json');



console.log(file)