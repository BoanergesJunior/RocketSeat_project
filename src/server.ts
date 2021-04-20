import 'reflect-metadata'

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import {appontmentsRouter, usersRouter, sessionsRouter} from './routes'
import AppError from './errors/AppError'

import './database'

import uploadConfig from './config/upload'

const app = express()
const port = 3333


app.use(express.json())

app.use('/users', usersRouter)
app.use('/appointments', appontmentsRouter)
app.use('/sessions', sessionsRouter)
app.use('/files', express.static(uploadConfig.directory))

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    console.error(err);

    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
