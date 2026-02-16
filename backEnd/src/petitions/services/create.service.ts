import { prisma } from '../../lib/prisma'
import { PetitionType, PetitionStatus } from '../../../generated/prisma' // Updated import

interface DataPetition {
  title          : string
  description   ?: string
  type           : PetitionType // Updated type
  status        ?: PetitionStatus // Updated type
  factsSummary  ?: string
  fileUrl       ?: string
  protocolNumber?: string
  processId     ?: string
  clientId       : string
  lawyerId       : string
}

export const createPetition = async (data: DataPetition) => {
  const petition = await prisma.petition.create({ // Updated prisma model and variable
    data: {
      title         : data.title,
      description   : data.description,
      type          : data.type,
      status        : data.status ?? PetitionStatus.DRAFT, // Updated status default
      factsSummary  : data.factsSummary,
      fileUrl       : data.fileUrl,
      protocolNumber: data.protocolNumber,
      processId     : data.processId,
      clientId      : data.clientId,
      lawyerId      : data.lawyerId,
    },
  })

  return petition // Updated return variable
}