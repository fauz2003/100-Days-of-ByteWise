const {format} = require('date-fns');
const {v4:uuid} = require('uuid');
const fsp = require('fs').promises;
const path = require('path');
const fs = require('fs');

console.log("\nDate and Time:");
console.log();
console.log(uuid());

const logEvents = async () =>{
    const dateTime = `Current date and time is ${format(new Date(), "dd/MM/yyyy HH:mm:ss")}`;
    const logId = `Hello from ${uuid()}\n`;

    console.log(logId);
    try{
        await fsp.appendFile(path.join(__dirname, "eventLog.txt"), logId);
    }
    catch(error){
        console.error(error);
    }
} 

module.exports = logEvents;
