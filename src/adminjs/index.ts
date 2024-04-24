import AdminJsExpress from "@adminjs/express";
import AdminJsSequelize from "@adminjs/sequelize";
import AdminJs from "adminjs";
import database from "../database/index.js";
import { componentLoader } from "./ComponentLoader.js";
import { locale } from "./locale/index.js";
import { adminJsResources } from "./resources/index.js";
import { dashboard } from "./dashboard.js";
import { branding } from "./branding.js";
import { authenticationOptions } from "./authentication.js";

AdminJs.registerAdapter(AdminJsSequelize);

export const adminJs = new AdminJs({
  dashboard,
  componentLoader,
  databases: [database],
  resources: adminJsResources,
  rootPath: "/admin",
  locale,
  branding,
});

export const adminJsRouter = AdminJsExpress.buildAuthenticatedRouter(
  adminJs,
  authenticationOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);

adminJs.watch();
