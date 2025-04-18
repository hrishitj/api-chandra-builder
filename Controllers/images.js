import allModels from "../Utils/allModels.js";

const imagesController = {};

imagesController.GetImages = async (req, res) => {
  const { id } = req.query;
  try {
    const image = await allModels.images.findOne({
      where: { id: id },
    });

    if (!image) {
      return res.status(422).json({ message: "image not found" });
    } else {
      return res
        .status(200)
        .json({ message: "Received image successfully", image: image });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export default imagesController;
