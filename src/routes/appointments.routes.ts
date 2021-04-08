import {Router} from 'express'
import {parseISO} from 'date-fns'

import {getCustomRepository} from 'typeorm'
import AppointmentsRepository from '../repositories/AppointmentsRepository'
import CreateAppointmentService from '../services/CreateAppointmentService'
import AppontmentsRepository from '../repositories/AppointmentsRepository'

const appontimentsRouter = Router()

appontimentsRouter.get('/', async (request,response) => {
    const appointmentsRepository = getCustomRepository(AppontmentsRepository)
    const appontments = await appointmentsRepository.find()

    return response.json(appontments)
})

appontimentsRouter.post('/', async (request, response) => {
    try{
        const {provider, date } = request.body

        const parsedDate = parseISO(date)

        const createAppointment = new CreateAppointmentService()

        const appointment = await createAppointment.execute({
            date: parsedDate,
            provider
        })

        return response.json(appointment)
    }
    catch(err) {
        return response.status(400).json({err: err.message})
    }
})

export default appontimentsRouter
