import fs from 'fs';
import path from 'path';
import cron from "node-cron";
import allModels from "../Utils/allModels.js";

const readFiles = async (folderPath) => {
    return new Promise((resolve, reject) => {
        const fileExtension = ['.jpg', '.png'];

        const getFiles = (dir) => {
            return new Promise((res, rej) => {
                fs.readdir(dir, { withFileTypes: true }, (err, items) => {
                    if (err) {
                        return rej(err);
                    }

                    const promises = items.map(item => {
                        const fullPath = path.join(dir, item.name);

                        if (item.isDirectory()) {
                            return getFiles(fullPath);
                        } else if (fileExtension.includes(path.extname(item.name))) {
                            return Promise.resolve(fullPath);
                        } else {
                            return Promise.resolve([]);
                        }
                    });

                    Promise.all(promises)
                        .then(results => {
                            const flattenedResults = results.flat();
                            const updatedResults = flattenedResults.map(filePath =>
                                filePath
                                    .replace(/assets/g, '')
                                    .replace(/\\/g, '/')
                            );
                            res(updatedResults);
                        })
                        .catch(rej);
                });
            });
        };

        getFiles(folderPath)
            .then(files => resolve(files))
            .catch(err => reject(err));
    });
};

const uploadImage = async () => {
    try {
        const job1 = cron.schedule('*/3 * * * *', async () => {
            console.log('Cron job started.');

            let pathFontThirty = "JMT-COLLEGE FONT(0.30 INCH) DONE/";
            let pathFontThirtyFive = "JMT-COLLEGE FONT(0.35 INCH) DONE/";
            let pathSansFontThirty = "JMT-SOURCE SANS PRO FONT(0.30 INCH) DONE/";
            let pathSansFontThirtyFive = "JMT-SOURCE SANS PRO FONT(0.35 INCH) DONE/";
            let pathChains = "CHAINS/"
            let pathBracelet = "BR/";

            let imagesFontThirty = await readFiles(`assets/${pathFontThirty}/`);
            let imagesFontThirtyFive = await readFiles(`assets/${pathFontThirtyFive}/`);
            let imagesSansFontThirty = await readFiles(`assets/${pathSansFontThirty}/`);
            let imagesSansFontThirtyFive = await readFiles(`assets/${pathSansFontThirtyFive}/`);
            let imagesChain = await readFiles(`assets/${pathChains}`);
            let imagesBracelet = await readFiles(`assets/${pathBracelet}`);

            let images = imagesFontThirty.concat(imagesFontThirtyFive.concat(imagesSansFontThirty.concat(imagesSansFontThirtyFive).concat(imagesChain).concat(imagesBracelet)))

            // console.log('Files found:', images);

            await allModels.images.truncate();
            await allModels.images.bulkCreate(images.map(filePath => ({ path: filePath })));

            console.log('Database updated successfully.');
        });

        job1.start();
    } catch (error) {
        console.error('Error during cron job execution:', error);
    }

};

export default uploadImage;
