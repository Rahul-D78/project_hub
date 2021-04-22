import {Router} from 'express'
import { registerUser, deleteUser, getAllUsers, updateUser, getUserByEmail, loginUser } from '../controllers/users';

const route = Router()

route.get('/', async(req, res) => {
    try {
        const users = await getAllUsers()
        res.status(200).send(users)  
    } catch (e) {
        res.status(500).send(`error getting all the users ${e}`)
    }
});

route.get('/:email', async(req, res) => {
    try {
       const user = await getUserByEmail(req.params.email);
       res.status(200).send(user) 
    } catch (e) {
        res.status(500).send(`error getting the user ${e}`)   
    }
})

route.post('/register', async(req, res) => {
    try {
        const user = await registerUser(req.body)
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(`error while register ${e}`)
    }
});

route.post('/login', async(req, res) => {
    try {
        const user = await loginUser(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send(`error while login ${e}`)
    }
})

route.patch('/:email', async(req, res) => {
    try {
        const user = await updateUser(req.body, req.params.email)
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(`error patching the user ${e}`)
     }
});

route.delete('/:email', async(req, res) => {
    try {
        const user = await deleteUser(req.params.email);
        res.status(200).send(user) 
    } catch (e) {
        res.status(500).send(`error deleting the user ${e}`)
    }
});

export const userRoute = route