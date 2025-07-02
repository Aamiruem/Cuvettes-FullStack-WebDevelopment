const os = require('os');

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.homedir());


// console.log(os.arch()); // x64

console.log(os.hostname()); // AamirMITTIAN IS MY HOST NAME




// console.log(os.networkInterfaces());

console.log(os.platform()); //win32

console.log(os.tmpdir()); //C:\Users\aamir\AppData\Local\Temp


console.log(os.type()); //Windows_NT

console.log(os.version()); //Windows 11 Home Single Language

console.log(os.freemem()); //11989307392


console.log(os.totalmem()); //25507651584
const freememory = `${(os.freemem() / 1024 / 1024 / 1024)} GB`;  //os.freemem();

console.log(freememory);


const totralmemory = `${(os.totalmem() / 1024 / 1024 / 1024)} GB`;  //os.totalmem();
console.log(totralmemory);
