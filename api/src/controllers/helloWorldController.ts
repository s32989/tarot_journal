import { Message } from '../model/Message'

const helloWorld = (req, res, next) => {
  Message.find({}).then((result) => {
    const [doc] = result
    const { message } = doc
    res.status(200).json({ message })
  }).catch((err) => {
    res.status(500).json({ message: err })
  })
}

export { helloWorld }
