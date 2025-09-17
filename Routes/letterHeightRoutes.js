import express from "express";
let router = express.Router();

import letterHeightsControllers from "../Controllers/letterHeightControllers.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     LetterHeight:
 *       type: object
 *       required:
 *         - letterHeight
 *       properties:
 *         letterHeight:
 *           type: string
 *           description: The height of the letter.
 *       example:
 *         id: 1
 *         letterHeight: Medium
 */

/**
 * @openapi
 * /getLetterHeight:
 *   get:
 *     summary: Retrieve a list of letter heights
 *     tags:
 *       - LetterHeights
 *     responses:
 *       200:
 *         description: A list of letter heights
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LetterHeight'
 *       500:
 *         description: Server error
 */

router.get("/getletterHeight",letterHeightsControllers.getLetterHeight)

/**
 * @openapi
 * /getLetterHeightV2:
 *   get:
 *     summary: Retrieve a list of letter heights
 *     tags:
 *       - LetterHeights
 *     responses:
 *       200:
 *         description: A list of letter heights
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LetterHeight'
 *       500:
 *         description: Server error
 */
router.get("/getletterHeightV2",letterHeightsControllers.getLetterHeightV2)

export default router;