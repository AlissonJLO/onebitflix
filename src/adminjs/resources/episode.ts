// src/adminjs/resources/episode.ts

import path from "path";
import { fileURLToPath } from "url";
import uploadFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import { componentLoader } from "../ComponentLoader.js";

export const episodeResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: [
    "name",
    "synopsis",
    "courseId",
    "order",
    "uploadVideo",
    "secondsLong",
  ],
  filterProperties: [
    "name",
    "synopsis",
    "courseId",
    "secondsLong",
    "createdAt",
    "updatedAt",
  ],
  listProperties: ["id", "name", "courseId", "order", "secondsLong"],
  showProperties: [
    "id",
    "name",
    "synopsis",
    "courseId",
    "order",
    "videoUrl",
    "secondsLong",
    "createdAt",
    "updatedAt",
  ],
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const localProvider = {
  bucket: path.join(__dirname, "../../../uploads"),
  opts: {},
};

export const episodeResourceFeatures: FeatureType[] = [
  uploadFeature({
    componentLoader,
    provider: { local: localProvider },
    properties: {
      key: "videoUrl",
      file: "uploadVideo",
    },
    uploadPath: (record, filename) =>
      `videos/course-${record.get("courseId")}/${filename}`,
  }),
];
