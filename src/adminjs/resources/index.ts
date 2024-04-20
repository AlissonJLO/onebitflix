// src/adminjs/resources.ts

import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models/index.js";
import { categoryResourceOptions } from "./category.js";
import { courseResourceOptions } from "./course.js";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions,
  },
  {
    resource: Category,
    options: categoryResourceOptions,
  },
];
