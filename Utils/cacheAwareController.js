import { getMasterData } from "../Services/cacheService.js";

export async function cacheAwareController(type, model) {
  let data = getMasterData(type);
  
  if (!data || data.length === 0) {
    // Fallback to DB
    data = await model.findAll({ raw: true });
    // Optional: update the cache if needed
    // masterCache[type] = data;
  }

  return data;
}
