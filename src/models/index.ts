// src/models/index.ts

import { Category } from "./Category.js";
import { Course } from "./Course.js";
import { Episode } from "./Episode.js";
import { User } from "./User.js";

Category.hasMany(Course, { as: "courses" });

Course.belongsTo(Category);
Course.hasMany(Episode);

Episode.belongsTo(Course);

export { Course, Category, Episode, User };
