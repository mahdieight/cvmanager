import express from 'express'
import ResumeController from '../http/controllers/resume.controller.js';
import ResumeValidation from '../validators/resume.validation.js';
import { Upload } from '../helper/upload.js';

const resumeRouter = express.Router();

resumeRouter
    .get('/', ResumeValidation.index(), ResumeController.index)
    .get('/:id', ResumeValidation.find(), ResumeController.find)
    .post('/', ResumeValidation.create(), ResumeController.create)
    .patch('/:id', ResumeValidation.update(), ResumeController.update)
    .delete('/:id', ResumeValidation.remove(), ResumeController.delete)
    .patch('/:id/status', ResumeValidation.update_status(), ResumeController.updateStatus)
    .post('/:id/call-history', ResumeValidation.call_history(), ResumeController.callHistory)
    .patch('/:id/file', Upload('resumes', 'file', 'file'), ResumeValidation.upload_file(), ResumeController.uploadFile)
    .get('/:id/comments', ResumeValidation.comments(), ResumeController.comments)
    .post('/:id/comments', ResumeValidation.addComments(), ResumeController.addComments)

export default resumeRouter