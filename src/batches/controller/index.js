import {
    OK,
    NOT_FOUND,
    BAD_REQUEST,
    CREATED,
} from 'http-status'

import BatchesServices from '../services'
export const listBatches = async (req, res, next) => {
    try {
        const batches = await BatchesServices.listBatches()
        return res.status(OK).json({
            batches
        })
    } catch (error) {
        error.status = NOT_FOUND
        next(error)
    }

}

export const createBatch = async (req, res, next) => {
    const {
        number,
        size,
        color,
        quantity
    } = req.body
    if (number && size && color && quantity) {

        try {
            const createdBatch = await BatchesServices.createBatches({
                number,
                size,
                color,
                quantity
            })
            return res.status(CREATED).json({createdBatch})
        } catch (err) {
            err.status = BAD_REQUEST
            return next(err)
        }
    }
}