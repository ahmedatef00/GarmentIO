import { validationResult } from 'express-validator'

const checkBody = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      type: 'fail',
      errors: errors.array()
    })
  }
  next()
}

export default checkBody
