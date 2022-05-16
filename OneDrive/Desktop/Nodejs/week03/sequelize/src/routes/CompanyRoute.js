import express from 'express';
import companyService from '../services/CompanyService.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const companyList = await companyService.getCompanyList();
  //console.log('router', companyList);
  res.status(200).send(companyList);
});

router.post('/', async (req, res) => {
  const company = await companyService.createCompany(req.body);
  res.status(201).send(company);
});

router.put('/:id',async (req, res) => {
  const id = Number(req.params.id);
  const company = req.body;
  const updatedCompany = await companyService.updateCompany(id, company);
  res.status(200).send(updatedCompany);
});

router.delete('/:id',async (req, res) => {
  const id = Number(req.params.id);
  await companyService.deleteCompany(id);
  res.status(200).send(`${id}'li sirket silindi`);
});

export default router;
