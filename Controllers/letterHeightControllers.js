import allModels from "../Utils/allModels.js";

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

export default letterHeightsControllers;
