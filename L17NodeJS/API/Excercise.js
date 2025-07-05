const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {

        res.writeHead(200, { 'Content-Type': 'text/plain' });

        res.end('Hello, World!');

    } else if (req.method === 'POST') {

        let body = '';

        req.on('data', (chunk) => {

            body += chunk;

        });

        req.on('end', () => {

            res.writeHead(200, { 'Content-Type': 'text/plain' });

            res.end(`Received: ${body}`);

        });

    }

});

server.listen(3000, () => {

    console.log('Server listening on port 3000');

});
