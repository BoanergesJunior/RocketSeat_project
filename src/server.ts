import 'reflect-metadata'

import express from 'express'
import {appontmentsRouter, usersRouter, sessionsRouter} from './routes'

import './database'

const app = express()
const port = 3333

app.use(express.json())
app.use('/users', usersRouter)
app.use('/appointments', appontmentsRouter)
app.use('/sessions', sessionsRouter)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
