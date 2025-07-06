const http = require('http');
const { parse } = require('url');
const { StringDecoder } = require('string_decoder');

// Create HTTP server
const server = http.createServer((req, res) => {
    // Get the URL and parse it
    const parsedUrl = parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');

    // Get the HTTP method
    const method = req.method.toLowerCase();

    // Get query string as an object
    const queryStringObject = parsedUrl.query;

    // Get headers as an object
    const headers = req.headers;

    // Get payload if any
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    req.on('end', () => {
        buffer += decoder.end();

        // Choose the handler for this request
        const chosenHandler = typeof (router[trimmedPath]) !== 'undefined'
            ? router[trimmedPath]
            : handlers.notFound;

        // Construct data object to send to handler
        const data = {
            trimmedPath,
            queryStringObject,
            method,
            headers,
            payload: buffer
        };

        // Route the request
        chosenHandler(data, (statusCode, payload) => {
            // Use the status code called back by the handler, or default to 200
            statusCode = typeof (statusCode) == 'number' ? statusCode : 200;

            // Use the payload called back by the handler, or default to empty object
            payload = typeof (payload) == 'object' ? payload : {};

            // Convert payload to string
            const payloadString = JSON.stringify(payload);

            // Return the response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);

            // Log the request
            console.log(`Request received on path: ${trimmedPath} with method: ${method}`);
            console.log('Query parameters: ', queryStringObject);
            console.log('Headers: ', headers);
            console.log('Payload: ', buffer);
        });
    });
});

// Define handlers
const handlers = {};

// Sample handler
handlers.hello = (data, callback) => {
    // Only accept GET requests
    if (data.method === 'get') {
        callback(200, { message: 'Welcome to the Hello API!' });
    } else {
        callback(405, { error: 'Method not allowed' });
    }
};

// POST handler
handlers.echo = (data, callback) => {
    // Only accept POST requests
    if (data.method === 'post') {
        try {
            const payload = data.payload ? JSON.parse(data.payload) : {};
            callback(200, {
                message: 'Received your POST request',
                yourData: payload
            });
        } catch (e) {
            callback(400, { error: 'Invalid JSON payload' });
        }
    } else {
        callback(405, { error: 'Method not allowed' });
    }
};

// Not found handler
handlers.notFound = (data, callback) => {
    callback(404, { error: 'Route not found' });
};

// Define request router
const router = {
    'hello': handlers.hello,
    'echo': handlers.echo
};

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Available endpoints:`);
    console.log(`GET http://localhost:${PORT}/hello`);
    console.log(`POST http://localhost:${PORT}/echo`);
});

