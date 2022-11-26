import express from 'express'
import CompanyValidation from '../validators/company.validation.js'
import CompanyController from '../http/controllers/company.controller.js'

const companyRouter = express.Router();


companyRouter
    .get('/', CompanyController.index)
    .get('/:id', CompanyValidation.find(), CompanyController.find)
    .post('/', CompanyValidation.create(), CompanyController.create)
    .patch('/:id', CompanyValidation.update(), CompanyController.update)
    .delete('/:id', CompanyValidation.remove(), CompanyController.delete)
    .patch('/:id/manager', CompanyValidation.manager(), CompanyController.manager)

export default companyRouter;