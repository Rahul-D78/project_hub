import {Router} from 'express'
import { projectRoute } from './projects';
import {userRoute} from './user'

const route = Router()

route.use('/users' ,userRoute);
route.use('/projects', projectRoute)

export const allRoute = route