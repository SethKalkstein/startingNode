const fs = require("fs");

const fileContents = fs.readFileSync("sampleText.txt", "utf8");

fs.writeFileSync("writeToNewFile.txt", fileContents);

