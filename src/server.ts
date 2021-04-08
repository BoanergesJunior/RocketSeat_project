import 'reflect-metadata'

import express from 'express'
import {appontimentsRouter} from './routes'

import './database'

const app = express()
const port = 3333

app.use(express.json())
app.use('/appointments', appontimentsRouter)

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
