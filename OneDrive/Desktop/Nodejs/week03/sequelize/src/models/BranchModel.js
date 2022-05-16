import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("my_db", "root", "159753.iB", {
  host: "localhost",
  dialect: "mysql",
});

const Branch = sequelize.define("Branch", {
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

export default Branch;
