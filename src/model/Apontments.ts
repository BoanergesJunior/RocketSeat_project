import {uuid} from 'uuidv4'

class Apointment {
    id: string
    provider: string
    date: Date

    constructor({provider, date}: Omit <Apointment, 'id'>){
        this.id = uuid()
        this.provider = provider
        this.date = date
    }
}

export default Apointment
