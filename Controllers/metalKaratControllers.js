import allModels from "../Utils/allModels.js";
import { cacheAwareController } from '../Utils/cacheAwareController.js';

const metalKaratsControllers ={};

metalKaratsControllers.getMetalKarat = async (req, res) =>{
    try {
        const metalKarats = await allModels.metalKaratModel.findAll();
        res.status(200).json(metalKarats);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

metalKaratsControllers.getMetalKaratV2 = async (req, res) => {
  try {
    const data = await cacheAwareController('metalKarats', allModels.metalKaratModelV2);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default metalKaratsControllers;
