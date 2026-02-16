import { prisma } from "../../lib/prisma"

interface ProcessCreateServiceData {
  // Campos do frontend
  case_number?: string
  processNumber?: string
  case_type?: string
  type?: string
  court?: string | null
  judge?: string | null
  subject?: string | null
  status?: string
  value?: number | null
  notes?: string | null
  client_id?: string | null
  clientId?: string | null
  lawyerId?: string | null
}

export const ProcessCreateService = async (data: ProcessCreateServiceData) => {
  try {
    // Mapear campos do frontend para o backend
    const processNumber = data.processNumber || data.case_number
    const type = data.type || data.case_type
    const clientId = data.clientId || data.client_id

    if (!processNumber) {
      throw new Error('Número do processo é obrigatório')
    }
    if (!type) {
      throw new Error('Tipo do processo é obrigatório')
    }

    const process = await prisma.process.create({
      data : {
        processNumber: processNumber,
        court: data.court || null,
        type: type,
        status: data.status || 'open',
        hearingDate: new Date(),
        caseValue: data.value || 0,
        internalNotes: data.notes || '',
        // Só adiciona relação se existir ID
        ...(clientId && {
          client: { connect: { id: clientId } },
        }),

        ...(data.lawyerId && {
          lawyer: { connect: { id: data.lawyerId } },
        }),
      },
      include: {
        client: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    })

    // Retornar no formato esperado pelo frontend
    return {
      id: process.id,
      client_id: process.clientId,
      case_number: process.processNumber,
      case_type: process.type,
      court: process.court,
      judge: null, // Campo não existe no schema
      subject: null, // Campo não existe no schema
      status: process.status,
      value: null, // Campo não existe no schema
      notes: null, // Campo não existe no schema
      created_at: process.createdAt.toISOString(),
      updated_at: process.updatedAt.toISOString(),
      clients: process.client ? {
        name: process.client.name
      } : undefined,
    }
  } catch (error: any) {
    console.error("ERRO REAL:", error)
    throw new Error(error.message || 'Erro ao criar processo')
  }
}
