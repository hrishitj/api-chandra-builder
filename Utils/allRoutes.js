import costingFormRoute from "../Routes/costingFormRoutes.js";
import chainTypeRoute from "../Routes/chainTypesRoutes.js";
import diamondQualityRoute from "../Routes/diamondQualityRoutes.js";
import fontStyleRoute from "../Routes/fontStyleRoutes.js";
import letterHeightRoute from "../Routes/letterHeightRoutes.js";
import metalColorRoute from "../Routes/metalColorRoutes.js";
import metalKaratRoute from "../Routes/metalKaratRoutes.js";
import images from "../Routes/images.js";

const ALL_ROUTES = (app) => {
    app.use(
        costingFormRoute,
        chainTypeRoute,
        diamondQualityRoute,
        fontStyleRoute,
        letterHeightRoute,
        metalColorRoute,        
        metalKaratRoute,
        images,
    )
};

export default ALL_ROUTES;