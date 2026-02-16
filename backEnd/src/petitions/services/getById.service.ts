import {prisma} from '../../lib/prisma'

export const GetPetitionById = async (id: string) => { // Updated function name
    try {
        const petition = await prisma.petition.findUnique({ // Updated prisma model and variable
            where: { id },
            include: {
                process: { select: { id: true, processNumber: true } },
                lawyer:  { select: { id: true, name: true } },
            }
        })
        return petition // Updated return variable
    } catch (error: any) {
        throw new Error(`Error fetching petition by ID: ${error.message}`) // Updated error message
    }
}
