const fs = require("fs");

/* const fileContents = fs.readFileSync("sampleText.txt", "utf8");

fs.writeFileSync("writeToNewFile.txt", fileContents);
 */

const fileToRead = "sampleText.txt";
const encoding = "utf8";

/* const fileToWrite = "thirdFileWrite.txt";
const fileToDelete = "secondWriteFile.txt"; */

const fileToWrite = "secondWriteFile.txt";
const fileToDelete = "thirdFileWrite.txt";

fs.readFile(fileToRead, encoding, (err, data) => 
    fs.writeFile(fileToWrite, data , (err) => { 
        if(err) throw err;
        console.log(`The file written was: ${fileToWrite}\nThe contents written to the file were:\n"\n${data}\n"`);
        fs.unlink(fileToDelete, err2 => { 
            if(err) throw err;
            console.log(`Just Deleted: "${fileToDelete}"`)
        });
    })
);

console.log("Are we blocking?")

// fs.unlink(fileToDelete, err => console.log(`Just Deleted: "${fileToDelete}"`));