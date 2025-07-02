// mkdir file-system-app
// cd file-system-app
// npm init -y


const fs = require('fs').promises;
const path = require('path');

// File paths
const originalFile = path.join(__dirname, 'example.txt');
const newFile = path.join(__dirname, 'new-example.txt');
const writeFile = path.join(__dirname, 'write-example.txt');

async function fileOperations() {
    try {
        // 1. Create a new file and write data to it
        await fs.writeFile(writeFile, 'This is some sample text to write.\n');
        console.log(`File created and data written to ${writeFile}`);




        // 2. Read and display the contents of a file
        const data = await fs.readFile(writeFile, 'utf8');
        console.log(`Contents of ${writeFile}:`);
        console.log(data);




        // 3. Rename a file
        await fs.rename(writeFile, originalFile);
        console.log(`File renamed from ${writeFile} to ${originalFile}`);




        // 4. Read the renamed file
        const renamedData = await fs.readFile(originalFile, 'utf8');
        console.log(`Contents of ${originalFile} after renaming:`);
        console.log(renamedData);




        // 5. Create a copy of the file for deletion demonstration
        await fs.copyFile(originalFile, newFile);
        console.log(`File copied from ${originalFile} to ${newFile}`);




        // 6. Delete a file
        await fs.unlink(newFile);
        console.log(`File ${newFile} deleted successfully`);




        // 7. Verify deletion by trying to read the deleted file
        try {
            await fs.readFile(newFile, 'utf8');
        } catch (error) {
            console.log(`Verification: ${newFile} does not exist (as expected)`);
        }




        // 8. Clean up - delete the original file
        // await fs.unlink(originalFile);
        // console.log(`Cleanup: ${originalFile} deleted successfully`);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

// Execute the file operations
fileOperations();












// Explanation
// Module Import: We use fs.promises for promise - based file operations, which makes error handling cleaner with async / await.

// File Paths: We define paths for our files using path.join() for cross - platform compatibility.

// Operations:

// fs.writeFile(): Creates a new file and writes data to it

// fs.readFile(): Reads and displays file contents

// fs.rename(): Renames a file

// fs.unlink(): Deletes a file

// Error Handling: We use try-catch blocks to handle potential errors gracefully.

//  Cleanup: The script cleans up by deleting the test files after operations are complete.
