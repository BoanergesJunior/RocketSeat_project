import Appointment from '../models/Appontments'
import {EntityRepository, Repository} from 'typeorm'

@EntityRepository(Appointment)
class AppontmentsRepository extends Repository<Appointment>{
    public async findByDate(date: Date): Promise<Appointment | null> {

        const findAppointment = await this.findOne({
            where: { date },
        })

        return findAppointment || null
    }
}

export default AppontmentsRepository
