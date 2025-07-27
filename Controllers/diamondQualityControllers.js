import allModels from "../Utils/allModels.js";
import { cacheAwareController } from '../Utils/cacheAwareController.js';

const diamondQualitysControllers ={};

diamondQualitysControllers.getDiamondQuality = async (req, res) =>{
    try {
        const diamondQualitys = await allModels.diamondQualityModel.findAll();
        res.status(200).json(diamondQualitys);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

diamondQualitysControllers.getDiamondQualityV2 = async (req, res) => {
  try {
    const data = await cacheAwareController('diamondQualities', allModels.diamondQualityModelV2);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default diamondQualitysControllers;
