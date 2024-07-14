
const os = require('os');
const path = require('path');


//OS Properties
console.log("\nOS properties:");
console.log("OS type is " + os.type());
console.log("OS version is " + os.version());
console.log("OS platform is " + os.platform());

//File Properties
console.log("\nFile properties:");
console.log(path.parse(__filename));

