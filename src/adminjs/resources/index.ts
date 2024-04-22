// src/adminjs/resources.ts

import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models/index.js";
import { categoryResourceOptions } from "./category.js";
import { courseResourceOptions } from "./course.js";
import { episodeResourceOptions, episodeResourceFeatures } from "./episode.js";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions,
  },
  {
    resource: Category,
    options: categoryResourceOptions,
  },
  {
    resource: Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures,
  },
];
