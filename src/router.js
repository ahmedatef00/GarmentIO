import {
    Router
} from 'express'
import BatchRouter from '../src/batches/router'
const router = new Router()


router.use('/', BatchRouter)
export default router