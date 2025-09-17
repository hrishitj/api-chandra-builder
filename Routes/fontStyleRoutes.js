import express from "express";
let router = express.Router();

import fontStylesControllers from "../Controllers/fontStyleControllers.js"

/**
 * @openapi
 * components:
 *   schemas:
 *     FontStyle:
 *       type: object
 *       required:
 *         - fontStyle
 *       properties:
 *         fontStyle:
 *           type: string
 *           description: The style of the font.
 *       example:
 *         id: 1
 *         fontStyle: Regular
 */

/**
 * @openapi
 * /getFontStyle:
 *   get:
 *     summary: Retrieve a list of font styles
 *     tags:
 *       - FontStyles
 *     responses:
 *       200:
 *         description: A list of font styles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FontStyle'
 *       500:
 *         description: Server error
 */

router.get("/getfontStyle",fontStylesControllers.getFontStyle)

/**
 * @openapi
 * /getfontStyleV2:
 *   get:
 *     summary: Retrieve a list of font styles (V2)
 *     tags:
 *       - FontStyles
 *     responses:
 *       200:
 *         description: A list of font styles (V2)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FontStyle'
 *       500:
 *         description: Server error
 */
router.get("/getfontStyleV2",fontStylesControllers.getFontStyleV2)

export default router;