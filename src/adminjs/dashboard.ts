import { PageHandler } from "adminjs";
import { Request, Response } from "express";
import { Category, Course, Episode, User } from "../models/index.js";
import { Components } from "./components/index.js";

interface DashboardOptions {
  handler?: PageHandler | undefined;
  component?: string | undefined;
}

const dashboard: DashboardOptions = {
  component: Components.Dashboard,

  handler: async (req: Request, res: Response, context) => {
    const courses = await Course.count();
    const episodes = await Episode.count();
    const category = await Category.count();
    const standardUsers = await User.count({ where: { role: "user" } });

    res.json({
      Cursos: courses,
      Episódios: episodes,
      Categorias: category,
      Usuários: standardUsers,
    });
  },
};

export { dashboard };
