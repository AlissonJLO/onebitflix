import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    database: "onebitflix_development",
    username: "onebitflix",
    password: "onebitflix",
    define: {
        underscored: true,
    },
});
export default sequelize;
