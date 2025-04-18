import fs from 'fs';
import path from 'path';

const readAllFiles = async (folderPath) => {
    // Define the directory and the file extension
    // const directoryPath = path.join(__dirname, 'your-folder-name');
    return new Promise((resolve, reject) => {


        const fileExtension = ['.jpg', '.png'];

        // Read the directory
        fs.readdir(folderPath, (err, files) => {
            if (err) {
                console.log('Error getting directory information.', err);
                return;
            }

            // Filter files by the file extension
            /* files.forEach(file => {
                if (fileExtension.includes(file)) {
                    console.log(file);
                } else {
                    // console.log(file);
                }
            }); */
            resolve(files);
        });
    })

}

export default readAllFiles