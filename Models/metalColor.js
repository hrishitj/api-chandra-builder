import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";

const metalColor = sequelize.define("metalColor",{
        metalColor: {
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

export default metalColor;