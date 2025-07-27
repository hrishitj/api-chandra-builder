import allModels from "../Utils/allModels.js";
import { cacheAwareController } from '../Utils/cacheAwareController.js';

const metalColorControllers ={};

metalColorControllers.getMetalColor = async (req, res) =>{
    try {
        const metalColors = await allModels.metalColorModel.findAll();
        res.status(200).json(metalColors);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

metalColorControllers.getMetalColorV2 = async (req, res) => {
  try {
    const data = await cacheAwareController('metalColors', allModels.metalColorModelV2);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default metalColorControllers;
