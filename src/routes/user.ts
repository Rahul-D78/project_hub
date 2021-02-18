import {Router} from 'express'

const route = Router()

route.get('/', (req, res) => {
    res.send('GET all the users')
})

export const userRoute = route