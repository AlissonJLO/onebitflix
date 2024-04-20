import sequelize from "../database/index.js";
import { DataTypes } from "sequelize";
export const Category = sequelize.define("Category", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    position: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
    },
});
