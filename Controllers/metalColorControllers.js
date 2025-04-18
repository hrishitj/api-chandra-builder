import allModels from "../Utils/allModels.js";

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

export default metalColorControllers;
