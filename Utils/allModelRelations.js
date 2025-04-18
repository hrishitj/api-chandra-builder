import sequelize from "./dbConnection.js";
import ALL_MODELS from "./allModels.js";

const All_Table_Relationship = async () => {
    ALL_MODELS.letterHeightModel.hasMany(ALL_MODELS.characterCostModel,{
        foreignKey: 'letterHeightId',
    });
    ALL_MODELS.metalKaratModel.hasMany(ALL_MODELS.characterCostModel,{
        foreignKey: 'metalKaratId',
    });
    ALL_MODELS.fontStyleModel.hasMany(ALL_MODELS.characterCostModel,{
        foreignKey: 'fontStyleId',
    });

    ALL_MODELS.letterHeightModel.hasMany(ALL_MODELS.costingModel,{
        foreignKey: 'letterHeightId',
    });
    ALL_MODELS.metalKaratModel.hasMany(ALL_MODELS.costingModel,{
        foreignKey: 'metalKaratId',
    });
    ALL_MODELS.fontStyleModel.hasMany(ALL_MODELS.costingModel,{
        foreignKey: 'fontStyleId',
    });
    ALL_MODELS.diamondQualityModel.hasMany(ALL_MODELS.costingModel,{
        foreignKey: 'diamondQualityId',
    });
    ALL_MODELS.metalColorModel.hasMany(ALL_MODELS.costingModel,{
        foreignKey: 'metalColorId',
    });
    ALL_MODELS.chainTypeModel.hasMany(ALL_MODELS.costingModel,{
        foreignKey: 'chainTypeId',
    });

};

export default All_Table_Relationship;