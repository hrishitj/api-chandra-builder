import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";
import fontStyleModel from "../Models/fontStyle.js";
import letterHeightModel from "../Models/letterHeight.js";
import metalKaratModel from "../Models/metalKarat.js";

const characterCost = sequelize.define("characterCost",{
    alphabet: {
        type:DataTypes.STRING,
        allowNull: false
    },
    fontStyleId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: fontStyleModel,
            key: "id"
        }
    },
    /* fontStyle: {
        type:DataTypes.ENUM("Regular","Sport"),
        allowNull: false
    }, */
    letterHeightId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: letterHeightModel,
            key: "id"
        }
    },
    /* letterHeight: {
        type:DataTypes.ENUM("Large","Medium"),
        allowNull:false
    }, */
    dimensions:{
        type:DataTypes.STRING,
        allowNull: false
    },
    diamondCarat:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    noOfDiamonds:{
        type:DataTypes.INTEGER,
        allowNull:false
    }, 
    weight10KT:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    metalKaratId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: metalKaratModel,
            key: "id"
        }
    },
    /* type:{
        type:DataTypes.ENUM("18KT","14KT","10KT"),
        allowNull:false
    } */
})

export default characterCost;