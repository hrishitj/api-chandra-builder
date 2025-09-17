import allModels from "../Utils/allModels.js";

const companyController = {};

// POST: Create a new company
companyController.createCompany = async (req, res) => {
  try {
    const company = await allModels.companyModelV2.create(req.body);
    res.status(201).json({ id: company.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET: Retrieve all companies
companyController.getAllCompanies = async (req, res) => {
  try {
    const companies = await allModels.companyModelV2.findAll();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default companyController;