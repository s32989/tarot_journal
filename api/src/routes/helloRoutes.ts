import express, { Router } from 'express'
import { helloWorld } from '../controllers/helloWorldController'

const helloRoutes : Router = express.Router()

helloRoutes.get('/', helloWorld)
helloRoutes.get('/another-route', helloWorld)

export { helloRoutes }
