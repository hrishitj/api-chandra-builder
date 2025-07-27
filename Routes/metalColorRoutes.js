import express from "express";
let router = express.Router();

import metalColorControllers from "../Controllers/metalColorControllers.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     MetalColor:
 *       type: object
 *       required:
 *         - metalColor
 *       properties:
 *         metalColor:
 *           type: string
 *           description: The color of the metal.
 *       example:
 *         id: 1
 *         metalColor: Rose Gold
 */

/**
 * @openapi
 * /getMetalColor:
 *   get:
 *     summary: Retrieve a list of metal colors
 *     tags:
 *       - MetalColors
 *     responses:
 *       200:
 *         description: A list of metal colors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MetalColor'
 *       500:
 *         description: Server error
 */

router.get("/getmetalColor",metalColorControllers.getMetalColor)
router.get("/getmetalColorV2",metalColorControllers.getMetalColorV2)

export default router;