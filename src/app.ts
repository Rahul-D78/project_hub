import express from 'express'
import { createConnection } from 'typeorm'
import { Project } from './entities/Projects'
import {User} from './entities/Users'
import {allRoute} from './routes/allRoutes'

const app = express()

const port = 3000 | process.env.PORT as any

app.use(allRoute)

app.get('/', (req, res) => {
    res.send('HIT "/" route')
})

async function start() {
    await createConnection({
        type: 'postgres',
        username:'project',
        password:'project',
        database: 'project',
        entities:[User, Project],
        synchronize: true,
        logging:true,
        dropSchema: true,
        logger:'advanced-console'
    })
    app.listen(port, ()  => console.log(`server is running on http://localhost:${port}`))
}

start()
