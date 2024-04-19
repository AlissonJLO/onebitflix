import express from "express";
import { sequelize } from "./database/index.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log("Connection has been established successfully.");
    }).catch((error) => {
        console.error("Unable to connect to the database:", error);
    });
    console.log(`Server started successfuly at port ${PORT}`);
});
