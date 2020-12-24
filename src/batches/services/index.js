import {
    BAD_REQUEST
} from 'http-status'

import Batches from '../../Models/batch'


const BatchesService = {
    async listBatches() {
        const batches = await Batches.find()
        return batches
    },

    async createBatches({
        number,
        size,
        color,
        quantity
    }) {

        const BatchParams = {
            number,
            size,
            color,
            quantity
        }
        const batchDocument = await Batches.create(BatchParams)
        const batch = batchDocument.toJSON()
        return batch
    }
}
export default BatchesService