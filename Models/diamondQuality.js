import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";

const diamondQuality = sequelize.define("diamondQuality",{
        diamondQuality: {
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

export default diamondQuality;