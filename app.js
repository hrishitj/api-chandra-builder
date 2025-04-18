import express  from 'express';
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import cors  from "cors";
import path  from 'path';

dotenv.config();
const app = express()

import adminJSConfig from './adminConfig.js';
import { swaggerConfig }  from "./swagger.js";
import relations from "./Utils/allModelRelations.js";
import dbConnection  from "./Utils/dbConnection.js";
import routes from "./Utils/allRoutes.js";
import uploadImage from './cron/images.js';

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "assets")));

app.use(cors());
app.use(cookieParser())

relations();

adminJSConfig(app);

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

app.use(fileUpload());

routes(app);

// uploadImage();

app.get('/', (req, res) => {
    const RESPONSE = {
            message: "Welcome to Chandra"
    }
    return res.send(RESPONSE);
});

dbConnection.sync().then(() => {
    console.log("Database connected successfully");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

swaggerConfig(app);