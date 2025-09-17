import costingModel from "../Models/costingForm.js"
import characterCostModel from "../Models/charactersCost.js";
import metalColorModel from "../Models/metalColor.js";
import metalKaratModel from "../Models/metalKarat.js";
import diamondQualityModel from "../Models/diamondQuality.js";
import chainTypeModel from "../Models/chainType.js";
import fontStyleModel from "../Models/fontStyle.js";
import letterHeightModel from "../Models/letterHeight.js";
import images from "../Models/images.js";

//v2 models
import metalColorModelV2 from "../ModelsV2/metalColors.js";
import letterHeightModelV2 from "../ModelsV2/letterHeights.js";
import fontStyleModelV2 from "../ModelsV2/fontStyles.js";
import diamondQualityModelV2 from "../ModelsV2/diamondQualitites.js";
import metalKaratModelV2 from "../ModelsV2/metalKarats.js";
import characterCostModelV2 from "../ModelsV2/characterCosts.js";
import pricingBaseModelV2 from "../ModelsV2/pricingBase.js";
import companyModelV2 from "../ModelsV2/company.js";

const Models = {
    costingModel,
    characterCostModel,
    metalColorModel,
    metalKaratModel,
    diamondQualityModel,
    chainTypeModel,
    fontStyleModel,
    letterHeightModel,
    images,

    // V2 models
    metalColorModelV2,
    letterHeightModelV2,
    fontStyleModelV2,
    diamondQualityModelV2,
    metalKaratModelV2,
    characterCostModelV2,
    pricingBaseModelV2,
    companyModelV2
    
}

export default Models;