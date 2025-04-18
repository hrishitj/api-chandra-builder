import sequelize from "../Utils/dbConnection.js";
import { DataTypes } from "sequelize";
import metalColorModel from "../Models/metalColor.js";
import metalKaratModel from "../Models/metalKarat.js";
import diamondQualityModel from "../Models/diamondQuality.js";
import chainTypeModel from "../Models/chainType.js";
import fontStyleModel from "../Models/fontStyle.js";
import letterHeightModel from "../Models/letterHeight.js";

const CostingForm = sequelize.define("costingForm",{
    styleNumber: {
        type:DataTypes.STRING,
    },
    deliveryPeriod: {
        type:DataTypes.INTEGER,
    },
    quantity: {
        type:DataTypes.INTEGER,
        allowNull: false
    },
    metalKaratId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: metalKaratModel,
            key: "id"
        }
    },
    /* metalKarat :{
        type:DataTypes.ENUM("10KT","14KT","18KT"),
        allowNull:false
    }, */
    metalColorId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: metalColorModel,
            key: "id"
        }
    },
    /* metalColor :{
        type:DataTypes.ENUM("Rose Gold","Gold","Platinum"),
        allowNull:false
    }, */
    diamondQualityId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: diamondQualityModel,
            key: "id"
        }
    },
    /* diamondQuality :{
        type:DataTypes.ENUM("VS","SI","LAB"),
        allowNull:false
    }, */
    fontStyleId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: fontStyleModel,
            key: "id"
        }
    },
    /* fontStyle :{
        type:DataTypes.ENUM("Regular","Sport"),
        allowNull:false
    }, */
    letterHeightId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: letterHeightModel,
            key: "id"
        }
    },
    /* letterHeight :{
        type:DataTypes.ENUM("Medium","Large"),
        allowNull:false
    }, */
    chainTypeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: chainTypeModel,
            key: "id"
        }
    },
    /* ChainType :{
        type:DataTypes.ENUM("Cat 30 Cable Chain with Lobster Lock"),
        allowNull:false
    }, */
    customName: {
        type:DataTypes.STRING,
        allowNull:false
    },
})

export default CostingForm;