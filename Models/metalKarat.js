import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";

const metalKarat = sequelize.define("metalKarat",{
        metalKarat: {
            type:DataTypes.STRING,
            allowNull: false
        },

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
    }
);

export default metalKarat;