import express from "express";
let router = express.Router();

import metalKaratsControllers from "../Controllers/metalKaratControllers.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     MetalKarat:
 *       type: object
 *       required:
 *         - metalKarat
 *       properties:
 *         metalKarat:
 *           type: string
 *           description: The karat value of the metal.
 *       example:
 *         id: 1
 *         metalKarat: 10KT
 */

/**
 * @openapi
 * /getMetalKarat:
 *   get:
 *     summary: Retrieve a list of metal karats
 *     tags:
 *       - MetalKarats
 *     responses:
 *       200:
 *         description: A list of metal karats
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MetalKarat'
 *       500:
 *         description: Server error
 */

router.get("/getmetalKarat",metalKaratsControllers.getMetalKarat);
router.get("/getMetalKaratV2", metalKaratsControllers.getMetalKaratV2);

export default router;