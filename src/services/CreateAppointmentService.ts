import {startOfHour} from 'date-fns'
import {getCustomRepository} from 'typeorm'

import Appointment from '../models/Appontments'
import AppontmentsRepository from '../repositories/AppointmentsRepository'

interface Request {
    provider_id: string
    date: Date
}

class CreateAppointmentService {

    public async execute({date, provider_id}: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(AppontmentsRepository)

        const appointmentDate = startOfHour(date)

        const findAppointmentInSameDate = await appointmentsRepository.findByDate(
            appointmentDate
        )

        if(findAppointmentInSameDate) {
            throw Error('This appointment is alreary booked')
        }

        const appointment = appointmentsRepository.create({
            provider_id,
            date:appointmentDate
        })

        await appointmentsRepository.save(appointment)

        return appointment
    }
}

export default CreateAppointmentService
