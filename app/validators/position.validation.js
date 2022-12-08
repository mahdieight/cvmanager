import { body, param } from 'express-validator'
import generalValidator from '../helper/validator.js';
import i18n from '../middlewares/lang.middleware.js'

class PositionValidation {
    create() {
        return [
            body('project_id')
                .notEmpty()
                .withMessage('position.validations.project_id_required')
                .isMongoId()
                .withMessage('position.validations.project_id_invalid')
                .trim(),
            body('company_id')
                .notEmpty()
                .withMessage('position.validations.company_id_required')
                .isMongoId()
                .withMessage('position.validations.company_id_invalid')
                .trim(),
            body('title')
                .notEmpty()
                .withMessage('position.validations.position_title_required')
                .isLength({ min: 3, max: 50 })
                .withMessage('position.validations.position_title_length')
                .trim(),
            body('level')
                .notEmpty()
                .withMessage('position.validations.position_level_required')
                .isIn(i18n.__("position.enums.level"))
                .withMessage('position.validations.position_level_incorrect')
                .trim(),
            body('is_active')
                .optional({ nullable: true, checkFalsy: true })
                .isBoolean()
                .withMessage('position.validations.position_is_active_incorrect')
                .trim(),
            generalValidator
        ];
    }

    find() {
        return [
            param('id')
                .notEmpty()
                .withMessage('position.validations.position_id_required')
                .isMongoId()
                .withMessage('position.validations.position_id_invalid')
                .trim(),
            generalValidator
        ]
    }

    update() {
        return [
            param('id')
                .notEmpty()
                .withMessage('position.validations.position_id_required')
                .isMongoId()
                .withMessage('position.validations.position_id_invalid')
                .trim(),
            body('project_id')
                .optional({ nullable: true, checkFalsy: true })
                .isMongoId()
                .withMessage('position.validations.project_id_invalid')
                .trim(),
            body('company_id')
                .optional({ nullable: true, checkFalsy: true })
                .isMongoId()
                .withMessage('position.validations.company_id_invalid')
                .trim(),
            body('title')
                .optional({ nullable: true, checkFalsy: true })
                .isLength({ min: 3, max: 50 })
                .withMessage('position.validations.position_title_length')
                .trim(),
            body('level')
                .optional({ nullable: true, checkFalsy: true })
                .isIn(i18n.__("position.enums.level"))
                .withMessage('position.validations.position_level_incorrect')
                .trim(),
            body('is_active')
                .optional({ nullable: true, checkFalsy: true })
                .isBoolean()
                .withMessage('position.validations.position_is_active_incorrect')
                .trim(),
            generalValidator
        ];
    }

    remove() {
        return [
            param('id')
                .notEmpty()
                .withMessage('position.validations.position_id_required')
                .isMongoId()
                .withMessage('position.validations.position_id_invalid')
                .trim(),
            generalValidator
        ];
    }
}

export default new PositionValidation();