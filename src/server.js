import mongoose from 'mongoose'
import app from './app'
const {PORT,MONGO_URI} = process.env

const bootServer = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Connected to MongoDB Sucessfully')
        app.listen(PORT, () => {
            console.log("connected to port: ", PORT)
        })
    } catch (error) {
        throw new Error('Mongo Connection failed')
    }
}
bootServer();