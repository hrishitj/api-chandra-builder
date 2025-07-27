import allModels from "../Utils/allModels.js";
import { cacheAwareController } from '../Utils/cacheAwareController.js';

const letterHeightsControllers ={};

letterHeightsControllers.getLetterHeight = async (req, res) =>{
    try {
        const letterHeights = await allModels.letterHeightModel.findAll();
        res.status(200).json(letterHeights);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

letterHeightsControllers.getLetterHeightV2 = async (req, res) => {
  try {
    const data = await cacheAwareController('letterHeights', allModels.letterHeightModelV2);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default letterHeightsControllers;
