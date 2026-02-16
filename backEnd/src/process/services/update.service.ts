import { prisma } from '../../lib/prisma'

interface UpdateProcessData {
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

export const updateProcess = async (
  id: string,
  data: UpdateProcessData
) => {
  if (!id) throw new Error('ID is required')

  // Mapear campos do frontend para o backend
  const updateData: any = {}

  if (data.processNumber !== undefined || data.case_number !== undefined) {
    updateData.processNumber = data.processNumber || data.case_number
  }
  if (data.type !== undefined || data.case_type !== undefined) {
    updateData.type = data.type || data.case_type
  }
  if (data.court !== undefined) {
    updateData.court = data.court
  }
  if (data.status !== undefined) {
    updateData.status = data.status
  }

  // Relacionamentos
  const clientId = data.clientId || data.client_id
  if (clientId !== undefined) {
    updateData.clientId = clientId || null
  }

  if (data.lawyerId !== undefined) {
    updateData.lawyerId = data.lawyerId || null
  }

  const process = await prisma.process.update({
    where: { id },
    data: updateData,
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
    client_id: process.clientId || '',
    case_number: process.processNumber,
    case_type: process.type,
    court: process.court,
    judge: null,
    subject: null,
    status: process.status,
    value: null,
    notes: null,
    created_at: process.createdAt.toISOString(),
    updated_at: process.updatedAt.toISOString(),
    clients: process.client ? { // Corrected from process.clients
      name: process.client.name // Corrected from process.clients
    } : undefined,
  }
}