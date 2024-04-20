import { ResourceWithOptions } from "adminjs";
import { Category } from "../../models/Category.js";
import { categoryResourceOptions } from "./category.js";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Category,
    options: categoryResourceOptions,
  },
];
