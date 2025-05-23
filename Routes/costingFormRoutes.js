import express from "express";
import { query } from "express-validator";
let router = express.Router();

import costingControllers from "../Controllers/costingControllers.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     CostingForm:
 *       type: object
 *       required:
 *         - quantity
 *         - metalKarat
 *         - metalColor
 *         - diamondQuality
 *         - fontStyle
 *         - letterHeight
 *         - ChainType
 *         - customName
 *       properties:
 *         styleNumber:
 *           type: string
 *           description: The style number.
 *         deliveryPeriod:
 *           type: integer
 *           description: The delivery period in days.
 *         quantity:
 *           type: integer
 *           description: The quantity of the items.
 *         metalKarat:
 *           type: string
 *           enum: [10KT, 14KT, 18KT]
 *           description: The karat of the metal.
 *         metalColor:
 *           type: string
 *           enum: [Rose Gold, Gold, Platinum]
 *           description: The color of the metal.
 *         diamondQuality:
 *           type: string
 *           enum: [VS, SI, LAB]
 *           description: The quality of the diamond.
 *         fontStyle:
 *           type: string
 *           enum: [Regular, Sport]
 *           description: The style of the font.
 *         letterHeight:
 *           type: string
 *           enum: [Medium, Large]
 *           description: The height of the letters.
 *         ChainType:
 *           type: string
 *           enum: [Cat 30 Cable Chain with Lobster Lock]
 *           description: The type of the chain.
 *         customName:
 *           type: string
 *           description: The custom name.
 *       example:
 *         styleNumber: "12345"
 *         deliveryPeriod: 30
 *         quantity: 100
 *         metalKarat: "14KT"
 *         metalColor: "Rose Gold"
 *         diamondQuality: "VS"
 *         fontStyle: "Regular"
 *         letterHeight: "Medium"
 *         ChainType: "Cat 30 Cable Chain with Lobster Lock"
 *         customName: "John Doe"
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     CharacterCost:
 *       type: object
 *       required:
 *         - alphabet
 *         - font
 *         - letterHeight
 *         - dimensions
 *         - diamondCarat
 *         - noOfDiamonds
 *         - weight10KT
 *         - type
 *       properties:
 *         alphabet:
 *           type: string
 *           description: The character of the alphabet.
 *         font:
 *           type: string
 *           enum: [Regular, Sport]
 *           description: The font style.
 *         letterHeight:
 *           type: string
 *           enum: [Large, Medium]
 *           description: The height of the letter.
 *         dimensions:
 *           type: string
 *           description: The dimensions of the character.
 *         diamondCarat:
 *           type: number
 *           format: float
 *           description: The carat of the diamond.
 *         noOfDiamonds:
 *           type: integer
 *           description: The number of diamonds.
 *         weight10KT:
 *           type: number
 *           format: float
 *           description: The weight in 10KT.
 *         type:
 *           type: string
 *           enum: [18KT, 14KT, 10KT]
 *           description: The type of the metal karat.
 *         path:
 *           type: string
 *           description: The path to the character's image or file.
 *       example:
 *         alphabet: A
 *         font: Regular
 *         letterHeight: Large
 *         dimensions: "0.35 INCH X 0.26 INCH  X 2.00 MM"
 *         diamondCarat: 0.071
 *         noOfDiamonds: 21
 *         weight10KT: 0.31
 *         type: 18KT
 *         path: "/images/A_regular_large.png"
 */

/**
 * @openapi
 * /costing:
 *   get:
 *     summary: Calculate costing based on query parameters.
 *     description: Calculate costing for custom jewelry based on quantity, metal karat, diamond quality, font style, letter height, and custom name.
 *     tags:
 *       - Costing
 *     parameters:
 *       - in: query
 *         name: quantity
 *         schema:
 *           type: integer
 *         required: true
 *         description: The quantity of custom jewelry.
 *       - in: query
 *         name: metalColor
 *         schema:
 *           type: string
 *         required: true
 *         description: The metal karat (e.g., "Rose Gold", "Gold", "Platinum").
 *       - in: query
 *         name: metalKarat
 *         schema:
 *           type: string
 *         required: true
 *         description: The metal karat (e.g., "10KT", "14KT", "18KT").
 *       - in: query
 *         name: DiamondQuality
 *         schema:
 *           type: string
 *         required: true
 *         description: The diamond quality (e.g., "VS", "SI", "LAB").
 *       - in: query
 *         name: fontStyle
 *         schema:
 *           type: string
 *         required: true
 *         description: The font style for custom name (e.g., "Regular", "Sport").
 *       - in: query
 *         name: letterHeight
 *         schema:
 *           type: string
 *         required: true
 *         description: The letter height for custom name (e.g., "Medium", "Large").
 *       - in: query
 *         name: customName
 *         schema:
 *           type: string
 *         required: true
 *         description: The custom name for jewelry.
 *     responses:
 *       200:
 *         description: Costing calculation successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 price:
 *                   type: number
 *                   description: The calculated price for the custom jewelry.
 *                 paths:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: The paths to the images of custom characters.
 *                 deliveryTime:
 *                   type: number
 *                   description: The estimated delivery time for the custom jewelry.
 *       400:
 *         description: Invalid request parameters.
 *       500:
 *         description: Internal server error.
 */

router.get(
  "/costing",
  [
    query("quantity").not().isEmpty().withMessage("quantity is required"),
    query("metalKarat").not().isEmpty().withMessage("metalKarat is required"),
    query("DiamondQuality")
      .not()
      .isEmpty()
      .withMessage("DiamondQuality is required"),
    query("fontStyle").not().isEmpty().withMessage("fontStyle is required"),
    query("letterHeight")
      .not()
      .isEmpty()
      .withMessage("letterHeight is required"),
    query("customName").not().isEmpty().withMessage("customName is required"),
  ],
  costingControllers.fetchCosting
);

export default router;
