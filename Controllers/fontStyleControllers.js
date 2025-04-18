import allModels from "../Utils/allModels.js";

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

export default fontStylesControllers;
