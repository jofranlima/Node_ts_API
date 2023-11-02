import prismaClient from "../Prisma";

class createCustomerService{
    async execute (){

        console.log ("Rota foi chamada")
        return {ok:true}
    }
}

export {createCustomerService}