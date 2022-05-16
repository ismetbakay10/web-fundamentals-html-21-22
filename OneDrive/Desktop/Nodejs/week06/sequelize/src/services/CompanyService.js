import companyRepository from '../data/CompanyRepository.js';

const getCompanyList = async () => {
  const companyList = await companyRepository.getCompanyList();
  return companyList;
};

const createCompany = async (pCompany) => {
  return  await companyRepository.createCompany(pCompany);
};

const updateCompany = async (pId, pCompany) => {
  return await companyRepository.updateCompany(pId, pCompany);
};

const deleteCompany =async (pId) => {
  await companyRepository.deleteCompany(pId);
};

export default {
  getCompanyList,
  createCompany,
  updateCompany,
  deleteCompany,
};
