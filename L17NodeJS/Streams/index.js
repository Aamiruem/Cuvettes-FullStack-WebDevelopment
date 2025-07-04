// const fs = require('fs');

// const myStream = fs.createReadStream('data.txt');
// myStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

// myStream.emit("data", "Hello");






// const fs = require('fs');

// // Correct path to data.txt (adjust if needed)
// const myStream = fs.createReadStream('./data.txt', "utf-8");
// const myWriteStream = fs.createWriteStream('./write.txt', "utf-8");


// myStream.on('data', (chunk) => {
//     console.log("chunk Received", chunk );
//     myWriteStream.write(chunk);
// });


// myStream.emit("data");






// myStream.on('end', () => {
//     console.log('Stream ended');
// });

// myStream.on('error', (err) => {
//     console.error('Error reading file:', err.message);
// });







const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'data.txt');
const outputPath = path.join(__dirname, 'write.txt');

// Create sample file if it doesn't exist
if (!fs.existsSync(inputPath)) {
    fs.writeFileSync(inputPath, 'Sample data for stream testing\n'.repeat(20));
}

const myStream = fs.createReadStream(inputPath, 'utf-8');
const myWriteStream = fs.createWriteStream(outputPath, 'utf-8');

myStream.on('data', (chunk) => {
    console.log(`Received chunk of ${chunk.length} characters`);
    myWriteStream.write(chunk);
});

myStream.on('end', () => {
    console.log('Read operation completed');
    myWriteStream.end();
});

myStream.on('error', (err) => {
    console.error('Read error:', err.message);
});

myWriteStream.on('error', (err) => {
    console.error('Write error:', err.message);
});

myWriteStream.on('finish', () => {
    console.log('Write operation completed');
});


