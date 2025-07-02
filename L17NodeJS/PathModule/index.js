// const path = require('path');

// const filePath = path.join('/folder1', '/folder2', 'file.txt');
// console.log(filePath);

// const baseName = path.basename(filePath);
// console.log(baseName);



// const absolutePath = path.resolve(__dirname, 'folder1', 'folder2', 'file.txt');
// console.log(absolutePath);

// cont = path.join(__dirname, 'folder1', 'folder2', 'file.txt');
// console.log(cont);


// console.log(path.basename("C:\Users\aamir\Desktop\Cuvette FullStack WedDev\Cuvettes-FullStack-WebDevelopment\L17NodeJS\PathModule>index.js"));



// console.log(path.basename("C:\Users\aamir\Desktop\Cuvette FullStack WedDev\Cuvettes-FullStack-WebDevelopment\L17NodeJS\PathModule>index.js").name);


// console.log(path.basename("C:\Users\aamir\Desktop\Cuvette FullStack WedDev\Cuvettes-FullStack-WebDevelopment\L17NodeJS\PathModule>index.js").ext);








// const path = require('path');

// const filePath = "C:/Users/aamir/Desktop/Cuvette FullStack WedDev/Cuvettes-FullStack-WebDevelopment/L17NodeJS/PathModule/index.js";
// const fullFilename = path.basename(filePath); // "index.js"
// const ext = path.extname(filePath); // ".js"
// const nameWithoutExt = path.basename(filePath, ext); // "index"

// console.log("Full filename:", fullFilename);
// console.log("Extension:", ext);
// console.log("Name without extension:", nameWithoutExt);









const path = require('path');

// Correct path (using forward slashes or escaped backslashes)
const filePath = "C:/Users/aamir/Desktop/Cuvette FullStack WedDev/Cuvettes-FullStack-WebDevelopment/L17NodeJS/PathModule/index.js";

// Get the full filename
console.log(path.basename(filePath)); // "index.js"

// Get the extension (using path.extname)
console.log(path.extname(filePath)); // ".js"

// Get the name without extension
console.log(path.basename(filePath, path.extname(filePath))); // "index"
