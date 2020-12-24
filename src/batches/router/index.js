import {
    Router
} from 'express'

const {
    body,
} = require('express-validator')

import {
    createBatch,
    listBatches
} from '../controller'
import checkBody from '../middlewares/validateBody'
import {batchValidation} from '../validation'
const router = new Router()

router.get('/', listBatches)
router.post('/',batchValidation, checkBody, createBatch)

export default router