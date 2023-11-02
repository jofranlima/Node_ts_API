import {FastifyRequest, FastifyReply} from "fastify"
import {createCustomerService} from "../services/createCustomerServices"

class createCustomerController{
    async handle (request: FastifyRequest, reply: FastifyReply ){

        const customerService = new createCustomerService()
        const customer = await customerService.execute()

        reply.send(customer)
    }


}