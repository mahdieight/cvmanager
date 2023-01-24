import express from 'express'
import CompanyValidation from '../validators/company.validation.js'
import CompanyController from '../http/controllers/company.controller.js'
import { Upload } from '../helper/upload.js';

const companyRouter = express.Router();


companyRouter
    .get('/', CompanyValidation.index(), CompanyController.index)
    .get('/:id', CompanyValidation.find(), CompanyController.find)
    .post('/', CompanyValidation.create(), CompanyController.create)
    .patch('/:id', CompanyValidation.update(), CompanyController.update)
    .delete('/:id', CompanyValidation.remove(), CompanyController.delete)
    .patch('/:id/manager', CompanyValidation.manager(), CompanyController.manager)
    .delete('/:id/manager', CompanyValidation.deleteManager(), CompanyController.deleteManager)
    .get('/:id/resumes', CompanyValidation.find(), CompanyController.getResumes)
    .get('/:id/managers', CompanyValidation.find(), CompanyController.getManagers)
    .get('/:id/projects', CompanyValidation.find(), CompanyController.getProjects)
    .patch('/:id/logo', Upload('companies', 'logo', 'image'), CompanyValidation.logo(), CompanyController.updateLogo)
export default companyRouter;