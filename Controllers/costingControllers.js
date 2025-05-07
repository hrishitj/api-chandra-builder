import allModels from "../Utils/allModels.js";
import { Op } from "sequelize";
import readAllFiles from "../Utils/readFiles.js";

const costingController = {};

costingController.fetchCosting = async (req, res) => {
  try {
    let paths = [];
    let chainImages = [];
    let braceletImages = [];
    let deliveryTime = 0;
    let price = 0;
    let weight = 0;
    let rate = 0;
    let ratexweight = 0;
    let diamondscost = 0;
    let dimensions = [];
    let noOfDiamonds = 0;
    let caratWeight = 0;

    let {
      quantity,
      metalKarat,
      metalColor,
      DiamondQuality,
      fontStyle,
      letterHeight,
      chainType,
      customName,
    } = req.query;

    let metalKaratId = await allModels.metalKaratModel.findOne({
      where: {
        metalKarat: metalKarat,
      },
    });

    let fontStyleId = await allModels.fontStyleModel.findOne({
      where: {
        fontStyle: fontStyle,
      },
    });

    let letterHeightId = await allModels.letterHeightModel.findOne({
      where: {
        letterHeight: letterHeight,
      },
    });

    // let diamondQualityId = await allModels.diamondQualityModel.findOne({
    //   where: {
    //     diamondQuality: DiamondQuality,
    //   },
    // });

    // let metalColorId = await allModels.metalColorModel.findOne({
    //   where: {
    //     metalColor: metalColor || "Gold",
    //   },
    // });

    // let chainTypeId = await allModels.chainTypeModel.findOne({
    //   where: {
    //     chainType: chainType || "Cat 30 Cable Chain with Lobster Lock",
    //   },
    // });

    //for now as the small character are not present
    customName = customName.toUpperCase();
    let temp = "";
    for (let i = 0; i < customName.length; i++) {
      if (customName[i] !== " ") {
        temp += customName[i];
      }
    }
    customName = temp;
    for (let i = 0; i < customName.length; i++) {
      let char = customName[i];

      let charCostQuote = await allModels.characterCostModel.findOne({
        where: {
          [Op.and]: [
            {
              alphabet: {
                [Op.eq]: char,
              },
            },
            {
              metalKaratId: {
                [Op.eq]: metalKaratId.id,
              },
            },
            {
              fontStyleId: {
                [Op.eq]: fontStyleId.id,
              },
            },
            {
              letterHeightId: {
                [Op.eq]: letterHeightId.id,
              },
            },
          ],
        },
      });

      if (charCostQuote) {
        if (metalKarat === "18KT") {
          weight = (parseFloat(charCostQuote.weight10KT) / 11.6) * 15.5;
          rate = parseFloat(((((2200 / 31.1035) * 18) / 24) * 1.1).toFixed(2));
        } else if (metalKarat === "14KT") {
          weight = (parseFloat(charCostQuote.weight10KT) / 11.6) * 15.5;
          rate = parseFloat(((((2200 / 31.1035) * 14) / 24) * 1.1).toFixed(2));
        } else {
          weight = parseFloat(charCostQuote.weight10KT);
          rate = parseFloat(((((2200 / 31.1035) * 10) / 24) * 1.1).toFixed(2));
        }

        ratexweight = rate * weight;

        if (DiamondQuality === "VS") {
          diamondscost = parseFloat(charCostQuote.diamondCarat) * 525;
        } else if (DiamondQuality === "SI") {
          diamondscost = parseFloat(charCostQuote.diamondCarat) * 475;
        } else if (DiamondQuality === "LAB") {
          diamondscost = parseFloat(charCostQuote.diamondCarat) * 200;
        }

        price += ratexweight + diamondscost;
        let dim = charCostQuote.dimensions.match(/[\d.]+/g);
        dimensions.push(dim);
        noOfDiamonds += parseInt(charCostQuote.noOfDiamonds);
        caratWeight += parseFloat(charCostQuote.diamondCarat);

        /* 
                SOURCE SANS PRO FONT - Regular
                COLLEGE FONT - Sport
                0.35 INCH - Large
                0.30 INCH - Medium 
                */

        // for test server
        // let path="http://172.15.6.117:5014/";

        // for staging server
        let path = ""; // http://192.168.53.224:5014/
        let url = "https://api.chandrajewellery.kenmarkserver.com";

        if (fontStyle === "Regular") {
          path += "JMT-SOURCE SANS PRO FONT";
        } else if (fontStyle === "Sport") {
          path += "JMT-COLLEGE FONT";
        }

        if (letterHeight === "Large") {
          path += "(0.35 INCH) DONE/";
        } else if (letterHeight === "Medium") {
          path += "(0.30 INCH) DONE/";
        }

        let images;
        if(char === '.') {
          images = await readAllFiles(`assets/${path}/DOT/`);
        }
        else {
          images = await readAllFiles(`assets/${path}/${char}/`);
        }

        // console.log(images);
        // path += char + "/" + char + " ";
        path += char + "/";

        if (metalColor === "Rose Gold") {
          images = images.filter((f) => f.includes("PG"));
          // console.log(images);

          path += images[0]; // "PG"

          chainImages.push(
            `${url}/CHAINS/Rose Gold Left.png`,
            `${url}/CHAINS/Rose Gold Right.png`
          );
          braceletImages.push(
            `${url}/BR/BR PG.png`,
          );
        } else if (metalColor === "Gold") {
          images = images.filter((f) => f.includes("YG"));
          // console.log(images);

          path += images[0]; // "YG"

          chainImages.push(
            `${url}/CHAINS/Gold Left.png`,
            `${url}/CHAINS/Gold Right.png`
          );
          braceletImages.push(
            `${url}/BR/BR YG.png`,
          );
        } else if (metalColor === "Platinum") {
          images = images.filter((f) => f.includes("WG"));
          // console.log(images);

          path += images[0]; // "WG"

          chainImages.push(
            `${url}/CHAINS/Silver Left.png`,
            `${url}/CHAINS/Silver Right.png`
          );
          braceletImages.push(
            `${url}/BR/BR WG.png`,
          );
        }

        /* let extension = ".png";

                if (path.includes("JMT-COLLEGE FONT(0.30 INCH) DONE")) {
                    extension = ".jpg";
                }

                path += extension; */
        paths.push(
          `${url}/${path}`
        );
      }
    }

    chainImages = chainImages.slice(0, 2);
    braceletImages = braceletImages.slice(0, 2);

    let length = 0;
    let width = 0;
    let height = 0;
    for (let i = 0; i < dimensions.length; i++) {
      length += parseFloat(dimensions[i][0]);
      width += parseFloat(dimensions[i][1]);
      height += parseFloat(dimensions[i][2]);
    }

    length = length.toFixed(2);
    width = width.toFixed(2);
    height = height.toFixed(2);

    price = price * quantity;
    price = parseFloat(price.toFixed(2));
    return res.status(200).json({ price, paths, chainImages, braceletImages, length, width, height, deliveryTime, noOfDiamonds, caratWeight });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

export default costingController;
