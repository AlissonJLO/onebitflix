import { Category, Course } from "../../models/index.js";
import { categoryResourceOptions } from "./category.js";
import { courseResourceOptions } from "./course.js";
export const adminJsResources = [
    {
        resource: Course,
        options: courseResourceOptions,
    },
    {
        resource: Category,
        options: categoryResourceOptions,
    },
];
