import express from "express";
import { query } from "express-validator";
let router = express.Router();

import imagesController from "../Controllers/images.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     Images:
 *       type: object
 *       required:
 *         - path
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the image.
 *         path:
 *           type: string
 *           description: The path to the image.
 *       example:
 *         id: 1
 *         path: /JMT-COLLEGE FONT(0.30 INCH) DONE
 */

/**
 * @openapi
 * /getImages:
 *   get:
 *     summary: Retrieve an image
 *     tags:
 *       - Images
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the image to retrieve
 *     responses:
 *       200:
 *         description: Order added successfully.
 *         content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                      example: Please try calling api for response Structure
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */

router.get("/getImages", [
    query('id').not().isEmpty().withMessage("id is required"),
], imagesController.GetImages);

export default router;
