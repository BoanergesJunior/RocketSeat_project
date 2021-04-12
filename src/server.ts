import 'reflect-metadata'

import express from 'express'
import {appontmentsRouter, usersRouter} from './routes'

import './database'

const app = express()
const port = 3333

app.use(express.json())
app.use('/users', usersRouter)
app.use('/appointments', appontmentsRouter)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
