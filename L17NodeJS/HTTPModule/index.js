// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Data sent from server');
//     res.end();
// });

// server.listen(7000, () => {
//     console.log('Server is running on port 7000');
// });






const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    else if(req.url === '/about'){
        res.write('<h1>About Page</h1>');
        res.end();
    }
    else if(req.url === '/contact'){
        res.write('<h1>Contact Page</h1>');
        res.end();
    }
        else if(req.url === '/services'){
            res.write('<h1>Services Page</h1>');
            res.end();
            
    }
        else if(req.url === '/training'){
            res.write('<h1>Training Page</h1>');
            res.end();
            
    }
    else{
        res.write('<h1>404 Page Not Found</h1>');
        res.end();
    }
});

server.listen(7000, () => {
    console.log('Server is running on port 7000');
});
