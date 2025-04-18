import allModels from "../Utils/allModels.js";

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

export default metalKaratsControllers;
