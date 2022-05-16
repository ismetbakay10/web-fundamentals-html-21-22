import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("my_db", "root", "159753.iB", {
  host: "localhost",
  dialect: "mysql",
});

const Company = sequelize.define("Company", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Company;
