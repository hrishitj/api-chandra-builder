import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";

const images = sequelize.define("images",{
        path: {
            type:DataTypes.STRING,
        },
    }
);

export default images;