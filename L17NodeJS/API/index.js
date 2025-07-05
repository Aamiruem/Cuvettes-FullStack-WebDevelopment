// const http = require('http');
// const fs = require('fs');


// const server = http.createServer((req, res) => {
//     const data = fs.readFileSync('data.json', 'utf-8');
//     const realData = JSON.parse(data);
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.write(data);
//     res.end(realData);
//     // res.end('Data sent from server');
// });

// server.listen((3000), () => {
//     console.log('Server is running on port 3000');
// });










const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const data = fs.readFileSync('data.json', 'utf-8');
    // const realData = JSON.parse(data);
    res.end(realData);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(data);
    // res.end('Data sent from server');
});

server.listen(3000);
