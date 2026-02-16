import {prisma} from '../../lib/prisma'

export const getPetitions = async () => { // Renamed function
    try {
        const petitions = await prisma.petition.findMany({ // Updated prisma model and variable
            include: {
                client:  true,  // ✅ Cliente Responsável
                process: true,  // ✅ Dados do Processo
                lawyer:  true,  // ✅ Advogado
            }
        })
        return petitions // Updated return variable
    } catch (error: any) {
        throw new Error("Error fetching petitions") // Updated error message
    }
}
