import { componentLoader } from "../ComponentLoader.js";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

export const Components = {
  Dashboard: componentLoader.add(
    "Dashboard",
    path.resolve(__dirname, "./Dashboard.js")
  ),
};
