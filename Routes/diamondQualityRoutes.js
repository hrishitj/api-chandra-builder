import express from "express";
let router = express.Router();

import diamondQualityController from "../Controllers/diamondQualityControllers.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     DiamondQuality:
 *       type: object
 *       required:
 *         - diamondQuality
 *       properties:
 *         diamondQuality:
 *           type: string
 *           description: The quality of the diamond.
 *       example:
 *         id: 1
 *         diamondQuality: VS
 */

/**
 * @openapi
 * /getDiamondQuality:
 *   get:
 *     summary: Retrieve a list of diamond qualities
 *     tags:
 *       - DiamondQualities
 *     responses:
 *       200:
 *         description: A list of diamond qualities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DiamondQuality'
 *       500:
 *         description: Server error
 */

router.get("/getdiamondQuality",diamondQualityController.getDiamondQuality)

/**
 * @openapi
 * /getdiamondQualityV2:
 *   get:
 *     summary: Retrieve a list of diamond qualities (V2)
 *     tags:
 *       - DiamondQualities
 *     responses:
 *       200:
 *         description: A list of diamond qualities (V2)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DiamondQuality'
 *       500:
 *         description: Server error
 */

router.get("/getdiamondQualityV2",diamondQualityController.getDiamondQualityV2)

export default router;