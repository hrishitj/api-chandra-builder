import allModels from "../Utils/allModels.js";

const chainTypesControllers = {};

chainTypesControllers.getChainTypes = async (req, res) =>{
    try {
        const chainTypes = await allModels.chainTypeModel.findAll();
        res.status(200).json(chainTypes);
    } catch (error) {
        res.status(500).json({
            error: error.message,
        });
    }
};

export default chainTypesControllers;
