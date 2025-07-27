// services/cacheService.js

import metalKaratModel from "../ModelsV2/metalKarats.js";
import metalColorModel from "../ModelsV2/metalColors.js";
import diamondQualityModel from "../ModelsV2/diamondQualitites.js";
import fontStyleModel from "../ModelsV2/fontStyles.js";
import letterHeightModel from "../ModelsV2/letterHeights.js";
import characterCostModel from "../ModelsV2/characterCosts.js";
import pricingBaseModel from "../ModelsV2/pricingBase.js";

// In-memory cache object
const masterCache = {
    metalKarats: [],
    metalColors: [],
    diamondQualities: [],
    fontStyles: [],
    letterHeights: [],
    characterCosts: [],
    pricingBase: []
};

// Map of keys to models
const modelMap = {
  metalKarats: metalKaratModel,
  metalColors: metalColorModel,
  diamondQualities: diamondQualityModel,
  fontStyles: fontStyleModel,
  letterHeights: letterHeightModel,
  characterCosts: characterCostModel,
  pricingBase: pricingBaseModel
};

// Load all master data from DB (no filtering)
export async function preloadMasterData() {
  try {
    const entries = Object.entries(modelMap);

    const results = await Promise.all(
      entries.map(async ([key, model]) => {
        try {
          const data = await model.findAll({ raw: true });
          return [key, data];
        } catch (err) {
          console.error(`❌ Failed to load ${key}:`, err.message);
          return [key, []];
        }
      })
    );

    for (const [key, data] of results) {
      masterCache[key] = data;
    }

    console.log('✅ Master data loaded into cache at', new Date().toLocaleString());
  } catch (err) {
    console.error('❌ Error during master data preload:', err.message);
  }
}

// Get cached master data
export function getMasterData(type) {
  return masterCache[type] || [];
}