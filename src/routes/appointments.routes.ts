import {Router} from 'express'
import {parseISO} from 'date-fns'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import {getCustomRepository} from 'typeorm'
import CreateAppointmentService from '../services/CreateAppointmentService'
import AppontmentsRepository from '../repositories/AppointmentsRepository'

const appontimentsRouter = Router()

appontimentsRouter.use(ensureAuthenticated)

appontimentsRouter.get('/', async (request,response) => {

    const appointmentsRepository = getCustomRepository(AppontmentsRepository)
    const appontments = await appointmentsRepository.find()

    return response.json(appontments)
})

appontimentsRouter.post('/', async (request, response) => {
    const {provider_id, date } = request.body

    const parsedDate = parseISO(date)

    const createAppointment = new CreateAppointmentService()

    const appointment = await createAppointment.execute({
        date: parsedDate,
        provider_id
    })

    return response.json(appointment)
})

export default appontimentsRouter
