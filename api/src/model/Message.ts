import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  message: { type: String }
})

const Message = mongoose.model('Message', MessageSchema)

export { Message }
