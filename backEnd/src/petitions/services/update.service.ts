import { prisma } from "../../lib/prisma"

export const UpdatePetition = async (id: string, data: any) => {
  try {
    return await prisma.petition.update({ // Updated prisma model
      where: { id },
      data: {
        title:          data.title,
        description:    data.description,
        type:           data.type,
        status:         data.status,
        factsSummary:   data.factsSummary,  // ✅ Resumo dos Fatos / Notas
        fileUrl:        data.fileUrl,
        protocolNumber: data.protocolNumber,
        processId:      data.processId,
        clientId:       data.clientId,      // ✅ Cliente Responsável
        lawyerId:       data.lawyerId,
      },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
