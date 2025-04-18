import express from "express";
let router = express.Router();

import chainTypesControllers from "../Controllers/chainTypesControllers.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     ChainType:
 *       type: object
 *       required:
 *         - chainType
 *       properties:
 *         chainType:
 *           type: string
 *           description: The type of the chain.
 *       example:
 *         id: 1
 *         chainType: Cat 30 Cable Chain with Lobster Lock
 */

/**
 * @openapi
 * /getChainTypes:
 *   get:
 *     summary: Retrieve a list of chain types
 *     tags:
 *       - ChainTypes
 *     responses:
 *       200:
 *         description: A list of chain types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ChainType'
 *       500:
 *         description: Server error
 */

router.get("/getChainTypes",chainTypesControllers.getChainTypes)

export default router;