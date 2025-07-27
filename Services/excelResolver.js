import xlsx from "xlsx";
import characterCostingV2 from "../ModelsV2/characterCosts.js";
import { getMasterData } from "./cacheService.js";

export async function resolveExcelData() {
    const workbook = xlsx.readFile("assets/PricingExcels/NameBuilderPrices-regular-medium-combined.xlsx");
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json(sheet);

    const recordsToInsert = [];

    for (let [index, row] of rows.entries()) {
        const fontStyleId = getMasterData("fontStyles").find(f => f.name === row.fontStyle)?.id;
        const letterHeightId = getMasterData("letterHeights").find(h => h.name === row.letterHeight)?.id;
        const metalKaratId = getMasterData("metalKarats").find(m => m.name === row.metalKarat)?.id;
        const diamondQualityId = getMasterData("diamondQualities").find(d => d.name === row.diamondQuality)?.id;

        if (!fontStyleId || !letterHeightId || !metalKaratId || !diamondQualityId) {
            console.warn(`⚠️ Skipping row ${index + 2}: Unresolved master data`);
            continue;
        }

        recordsToInsert.push({
            letter: row.letter,
            fontStyleId,
            letterHeightId,
            metalKaratId,
            diamondQualityId,
            metalWeight: parseFloat(parseFloat(row.metalWeight).toFixed(3)),
            diamondCarat: row.diamondCarat ? parseFloat(parseFloat(row.diamondCarat).toFixed(3)) : null,
            diamondPrice: row.diamondPrice ? parseFloat(parseFloat(row.diamondPrice).toFixed(2)) : null,
            noOfDiamonds: row.noOfDiamonds ? parseInt(row.noOfDiamonds, 10) : null,
            dimensions: row.dimensions || null
        });
    }

    if (recordsToInsert.length === 0) {
        console.warn("❌ No valid rows found to insert.");
        return;
    }

    try {
        await characterCostingV2.bulkCreate(recordsToInsert);
        console.log(`✅ Inserted ${recordsToInsert.length} rows into characterCostingV2.`);
    } catch (err) {
        console.error("❌ DB Insert Error:", err.message);
    }
}