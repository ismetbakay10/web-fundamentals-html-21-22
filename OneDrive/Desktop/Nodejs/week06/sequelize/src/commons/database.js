import { Sequelize } from "sequelize";
import Company from "../models/CompanyModel.js";
import Branch from "../models/BranchModel.js";

const sequelize = new Sequelize("my_db", "root", "159753.iB", {
  host: "localhost",
  dialect: "mysql",
});

Company.hasMany(Branch);
Branch.belongsTo(Company);

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await Company.sync();
    await Branch.sync();
    // await Company.sync({ force: true });
    // await Branch.sync({ force: true });
    console.log("Connected!");
  } catch (error) {
    console.log("Error");
  }
};

connectToDatabase();
