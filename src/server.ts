import express from "express";
import database from "./database/index.js";
import { adminJs, adminJsRouter } from "./adminjs/index.js";
import { router } from "./routes.js"; 

const app = express();

app.use(express.static("public"));

app.use(router);

app.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await database.authenticate().then(() => {
    console.log("DB connection successfull.");
  });

  console.log(`Server started successfuly at port ${PORT}.`);
});
