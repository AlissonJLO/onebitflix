// src/adminjs/resources.ts

import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, User } from "../../models/index.js";
import { categoryResourceOptions } from "./category.js";
import { courseResourceFeatures, courseResourceOptions } from "./course.js";
import { episodeResourceOptions, episodeResourceFeatures } from "./episode.js";
import { userResourceOptions } from "./user.js";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures,
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
  {
    resource: User,
    options: userResourceOptions,
  },
];
