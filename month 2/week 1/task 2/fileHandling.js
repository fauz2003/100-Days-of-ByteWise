//File Handling
const path = require('path');
const fsp = require('fs').promises;
const { existsSync } = require('fs');


console.log("\nFile Handling:\n");

const fileOps = async () =>{
    try {
        if (!existsSync(path.join(__dirname, "input.txt"))){
            await fsp.writeFile(path.join(__dirname, "input.txt"), "Hello World");
        }
        console.log("Reading data from file...");
        const data = await fsp.readFile(path.join(__dirname, "input.txt"), 'utf8');
        console.log("Data read from file.");
        console.log("Writing data to new file...");
        await fsp.writeFile(path.join(__dirname, "output.txt"), data);
        console.log("Data written to new file.");
        console.log("Appending data to new file...");
        await fsp.appendFile(path.join(__dirname, "output.txt"), "\n" + data);
        console.log("Data appended to new file.");
        console.log("Deleting new file...");
        await fsp.unlink(path.join(__dirname, "input.txt"));
        console.log("New file deleted.");
    } catch (error) {
        console.error(error);
    }
}

fileOps();