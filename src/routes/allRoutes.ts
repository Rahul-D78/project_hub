import {Router} from 'express'
import {userRoute} from './user'

const route = Router()

route.use('/users' ,userRoute)

export const allRoute = route