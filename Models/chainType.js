import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";

const chainType = sequelize.define("chainType",{
        chainType: {
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

export default chainType;