const fs = require("fs");

const dirName = "randomDir";
const dirToDelete = "otherRandDir";
/* 
const dirName = "otherRandDir";
const dirToDelete = "randomDir";
 */
//syncronous creation and directory removal
/* 
fs.mkdirSync(dirName);
fs.rmdirSync(dirToDelete);
 */
//Async Version
/* 
fs.mkdir(dirName, err => {
    if (err) throw err;
    console.log(`${dirName} created in ${__dirname}`);
});

fs.rmdir(dirToDelete, err => {
    if (err) throw err;
    console.log(`${dirToDelete} deleted in ${__dirname}`);
});
 */
//using async to wait for the delete until after the write happens

fs.mkdir(dirName, err2 => {
    if (err2) throw err2;
    console.log(`${dirName} created in ${__dirname}`);
    fs.rmdir(dirToDelete, err => {
        if (err) throw err;
        console.log(`${dirToDelete} deleted in ${__dirname}`);
        console.log(`Read and Write from this file ${__filename}`)
    });
});
