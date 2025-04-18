import { serve, setup } from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

export const swaggerConfig = (app) => {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "chandra",
        version: "1.0.0",
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT || 5006}`,
          description: "Development server",
        },
        {
          url: `https://94.136.184.238:${process.env.PORT || 5006}`,
          description: "Test server",
        },
        {
          url: `https://chandrajewellery.api.ls2.kenmarkserver.com`, 
          description: "Staging server",
        },
      ],
    },
    apis: ["./Routes/**/*.js"],
  };

  const swaggerSpec = swaggerJsdoc(options);
  app.use("/api-docs", serve, setup(swaggerSpec));
};