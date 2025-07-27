import allModels from "../Utils/allModels.js";
import { cacheAwareController } from '../Utils/cacheAwareController.js';

const fontStylesControllers ={};

fontStylesControllers.getFontStyle = async (req, res) =>{
    try {
        const fontStyles = await allModels.fontStyleModel.findAll();
        res.status(200).json(fontStyles);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

fontStylesControllers.getFontStyleV2 = async (req, res) => {
  try {
    const fontStyles = await cacheAwareController('fontStyles', allModels.fontStyleModelV2);
    res.status(200).json(fontStyles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default fontStylesControllers;
