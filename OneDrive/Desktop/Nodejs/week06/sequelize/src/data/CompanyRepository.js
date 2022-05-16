// import db from '../commons/database.js';
import Company from '../models/CompanyModel.js'

const getCompanyList = async () => {
  // const rows = await db.query('SELECT * FROM companies');
  // return rows;   
  return Company.findAll();
};

const createCompany = (pCompany) => {
  // let sql = `INSERT INTO companies (name) VALUES ('${pCompany.name}')`;
  // db.query(sql, (err, result) => {
  //   if (err) throw err;
  //   console.log('Company added!');
  // });
  // return pCompany;
  return  Company.create(pCompany)
};

const updateCompany = (pId, pCompany) => {
  // let sql = `UPDATE companies SET name = '${pCompany.name}' WHERE id = '${pId}'`;
  // db.query(sql, (err, result) => {
  //   if (err) throw err;
  //   console.log('Company updated!');
  // });
  // return pCompany;
  return Company.update(pCompany,{where:{id:pId}})
};

const deleteCompany = (pId) => {
  // let sql = `DELETE FROM companies WHERE id = '${pId}'`;
  // db.query(sql, (err, result) => {
  //   if (err) throw err;
  //   console.log('Company deleted!');
  // });
  return Company.destroy({where: {id:pId}})
};

export default {
  getCompanyList,
  createCompany,
  updateCompany,
  deleteCompany,
};
