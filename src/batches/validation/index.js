import batch from '../../Models/batch';

const {
    body,
} = require('express-validator')

export let batchValidation = [
    body('number')
    .exists()
    .isNumeric()
    .withMessage('number  must be Numeric')
    .withMessage('number is required and must be numeric')
    .custom(value => {
        return batch.findOne({
            number: value
        }).then(number => {
            if (number !== null) {
                return Promise.reject('Number is already in use');
            }
        })
    }),

    body('size', 'size is required and must be in [S,X,L,X]')
    .notEmpty()
    .isIn(['S', 'M', 'L', 'X']),

    body('color', 'color is required and must be in [red, blue, black, green]')
    .notEmpty()
    .isIn(["red", "blue", "black", "green"]),

    body('quantity').
    exists().withMessage('quantity is required')
    .isNumeric().withMessage(' quantity is required and  must be a numeric value')

];