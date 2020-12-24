import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import router from './router'

require('dotenv').config()

const app = express()

app.use(cors())

// parse requests of content-type - application/json
app.use(express.json())
// Includes all 11 middlewares
app.use(helmet())

app.use('/api/v0', router)

// error handler
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500

    return res.status(statusCode).json({
        type: 'fail',
        error: error.toString()
    })
})
export default app