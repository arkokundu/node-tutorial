const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);

//how long computer has been running
//method returns system runtime in seconds

const uptime = os.uptime()
console.log(`The system uptime is ${uptime} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);