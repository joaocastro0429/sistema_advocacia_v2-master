import { prisma } from "../../lib/prisma"

interface CreateClientData {
  name: string
  email?: string | null
  phone?: string | null
  cpf?: string | null
  cnpj?: string | null
  cpf_cnpj?: string | null
  address?: string | null
  city?: string | null
  state?: string | null
  document_id?: string | null
  documentPath?: string | null
  userId: string
}

export async function CreateClient(data: CreateClientData) {
  // Aceita cpf_cnpj legado e separa para os campos atuais do schema
  let cpf = data.cpf ?? null
  let cnpj = data.cnpj ?? null

  if (data.cpf_cnpj && !cpf && !cnpj) {
    const cleanCpfCnpj = data.cpf_cnpj.replace(/\D/g, '')
    if (cleanCpfCnpj.length === 11) {
      cpf = data.cpf_cnpj
    } else if (cleanCpfCnpj.length === 14) {
      cnpj = data.cpf_cnpj
    }
  }

  const createData = {
    name: data.name,
    email: data.email ?? null,
    phone: data.phone ?? null,
    cpf,
    cnpj,
    address: data.address ?? null,
    city: data.city ?? null,
    state: data.state ?? null,
    documentPath: data.documentPath ?? data.document_id ?? null,
    userId: data.userId,
  }

  let client: any
  try {
    client = await prisma.client.create({
      data: createData,
    })
  } catch (error: any) {
    const isMissingDocumentPath = error?.code === "P2022"

    if (!isMissingDocumentPath) throw error

    // Fallback para bancos ainda sem a coluna documentPath
    const { documentPath, ...legacyData } = createData
    client = await prisma.client.create({
      data: legacyData,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        cpf: true,
        cnpj: true,
        address: true,
        city: true,
        state: true,
        userId: true,
        createdAt: true,
        updatedAt: true,
      },
    })
  }

  return {
    ...client,
    cpf_cnpj: client.cpf || client.cnpj || null,
    document_id: client.documentPath ?? null,
  }
}
