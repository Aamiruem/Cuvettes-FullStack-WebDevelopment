const fs = require('fs');

// Read file

fs.readFile('example.txt', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});



// Create and write file

fs.writeFile('newfile.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File created');
    }
});

// Delete file

fs.unlink('delete.txt', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File deleted');
    }
});

// Rename file

fs.rename('oldname.txt', 'newname.txt', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('File renamed');
    }
});
