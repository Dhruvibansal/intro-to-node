//console.log("hello world");
//const fs = require("fs");
//to copy from file 1 to file 2
//fs.copyFileSync("file1.txt", "file2.txt");
var superheroes = require("superheroes");
var mySuperheroName = superheroes.random();
console.log(mySuperheroName);

//OUTPUT
/*node index.js
Master Mold
dhruvi@dhruvi-HP-Notebook:~/Desktop/intro-to-node$ node index.js
Siryn
dhruvi@dhruvi-HP-Notebook:~/Desktop/intro-to-node$ node index.js
Crimson King
dhruvi@dhruvi-HP-Notebook:~/Desktop/intro-to-node$ node index.js
Doctor Octopus
dhruvi@dhruvi-HP-Notebook:~/Desktop/intro-to-node$ 
*/
var supervillain = require("supervillains")
var mySupervillainName = supervillain.random();
console.log(mySupervillainName);