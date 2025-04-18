import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";

const fontStyle = sequelize.define("fontStyle",{
        fontStyle: {
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

export default fontStyle;