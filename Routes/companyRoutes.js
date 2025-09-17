import express from "express";
let router = express.Router();

import companyControllers from "../Controllers/companyControllers.js";

/**
 * @openapi
 * /createCompany:
 *   post:
 *     summary: Create a new company
 *     tags:
 *       - Company
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - multiplier
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the company.
 *               multiplier:
 *                 type: number
 *                 description: The multiplier value.
 *           example:
 *             name: "Acme Corp"
 *             multiplier: 2.8
 *     responses:
 *       201:
 *         description: Company created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique ID of the created company.
 *       400:
 *         description: Invalid input
 */

router.post("/createCompany", companyControllers.createCompany);


/**
 * @openapi
 * /getAllCompanies:
 *   get:
 *     summary: Retrieve all companies
 *     tags:
 *       - Company
 *     responses:
 *       200:
 *         description: A list of companies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   multiplier:
 *                     type: number
 *       500:
 *         description: Server error
 */

router.get("/getAllCompanies", companyControllers.getAllCompanies);

export default router;

