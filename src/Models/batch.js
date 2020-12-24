import mongoose from 'mongoose'

const batchSchema = new mongoose.Schema({
    number: {
        type: Number,
        unique: true,
        required: true,
        min: 1,
    },
    size: {
        type: String,
        required: true,
        enum: ["S", "M", "L", "X"],
    },
    color: {
        type: String,
        required: true,
        enum: ["red", "blue", "black", "green"],
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
})
export default mongoose.model('Batches', batchSchema)