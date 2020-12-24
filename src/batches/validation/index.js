import {
    number
} from 'yargs';
import batch from '../../Models/batch';

const {
    body,
} = require('express-validator')

export let batchValidation = [
    body('number')
    .exists()
    .withMessage('number is required')
    .custom(value => {
        return batch.findOne({
            number: value
        }).then(number => {
            if (number!==null) {
                return Promise.reject('Number is already in use');
            }
        })
    })
    .isNumeric()
    .withMessage('number  must be Numeric'),


    body('size', 'must be in [S,X,L,X]')
    .notEmpty()
    .isIn(['S', 'M', 'L', 'X']),

    body('color', 'must be in [red, blue, black, green]')
    .notEmpty()
    .isIn(["red", "blue", "black", "green"]),

    body('quantity').
    exists().withMessage('quantity is required')
    .isNumeric().withMessage(' quantity must be a numeric value')

];