const {
    body,
} = require('express-validator')

export let batchValidation = [
    body('number', 'must be a numeric value')
    .notEmpty()
    .isNumeric(),
    body('size', 'must be in [S,X,L,X]')
    .notEmpty()
    .isIn(['S', 'M', 'L', 'X']),

    body('color', 'must be in ["red", "blue", "black", "green"]')
    .notEmpty()
    .isIn(["red", "blue", "black", "green"]),

    body('quantity', 'must be a numeric value').
    notEmpty()
    .isNumeric()

];