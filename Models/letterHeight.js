import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";

const letterHeight = sequelize.define("letterHeight",{
        letterHeight: {
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

export default letterHeight;