// src/adminjs/resources/course.ts

import { ResourceOptions, FeatureType } from "adminjs";
import path from "path";
import { componentLoader } from "../ComponentLoader.js";
import uploadFileFeature from "@adminjs/upload";
import { fileURLToPath } from "url";

export const courseResourceOptions: ResourceOptions = {
  navigation: "Catálogo",
  editProperties: [
    "name",
    "synopsis",
    "uploadThumbnail",
    "featured",
    "categoryId",
  ],
  filterProperties: [
    "name",
    "synopsis",
    "featured",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
  listProperties: ["id", "name", "featured", "categoryId"],
  showProperties: [
    "id",
    "name",
    "synopsis",
    "featured",
    "thumbnailUrl",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
};

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const localProvider = {
  bucket: path.join(__dirname, "../../../public"),
  opts: {},
};

export const courseResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    componentLoader,
    provider: {
      local: localProvider,
    },
    properties: {
      key: "thumbnailUrl",
      file: "uploadThumbnail",
    },
    uploadPath: (record, filename) =>
      `thumbnails/course-${record.get("id")}/${filename}`,
  }),
];
