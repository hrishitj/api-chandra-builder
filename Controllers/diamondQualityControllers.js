import allModels from "../Utils/allModels.js";

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

export default diamondQualitysControllers;
