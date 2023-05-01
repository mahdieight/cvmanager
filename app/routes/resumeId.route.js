import express from 'express'
import ResumeController from '../http/controllers/resume.controller.js';
import ResumeValidation from '../validators/resume.validation.js';
import { Upload } from '../helper/upload.js';
import { toLowerCase } from '../middlewares/lowerCase.middleware.js';

const resumeIdRouter = express.Router({ mergeParams: true });

resumeIdRouter
    .get('', ResumeValidation.find(), ResumeController.find)
    .patch('', ResumeValidation.update(), toLowerCase, ResumeController.update)
    .delete('', ResumeValidation.remove(), ResumeController.delete)
    .patch('/status', ResumeValidation.update_status(), ResumeController.updateStatus)
    .patch('/call-history', ResumeValidation.call_history(), ResumeController.callHistory)
    .patch('/file', Upload('resumes', 'file', 'file'), ResumeValidation.upload_file(), ResumeController.uploadFile)
    .get('/comments', ResumeValidation.comments(), ResumeController.comments)
    .patch('/avatar', Upload('resumes', 'avatar', 'image'), ResumeValidation.avatar(), ResumeController.updateAvatar)
    .patch('/comments', ResumeValidation.addComments(), ResumeController.addComments)
    .patch('/hire_status', ResumeValidation.hireStatus(), ResumeController.hireStatus)
    .patch('/contributor/:user_id', ResumeValidation.addContributor(), ResumeController.setContributor)
    .delete('/contributor/:user_id', ResumeValidation.removeContributor(), ResumeController.unsetContributor)
    .patch('/tag/:tag_id', ResumeValidation.set_tag(), ResumeController.setTag)
    .delete('/tag/:tag_id', ResumeValidation.unset_tag(), ResumeController.unsetTag)
    .patch('/hired', ResumeValidation.hired(), ResumeController.hired)

export default resumeIdRouter