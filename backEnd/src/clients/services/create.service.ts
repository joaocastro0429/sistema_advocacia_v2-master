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
  zip_code?: string | null
  notes?: string | null
  dateOfBirth?: string | Date | null
  profession?: string | null
  maritalStatus?: string | null
}

export async function CreateClient(data: CreateClientData) {
  // Se cpf_cnpj foi enviado, tentar separar em cpf ou cnpj
  let cpf = data.cpf ?? null
  let cnpj = data.cnpj ?? null
  
  if (data.cpf_cnpj && !cpf && !cnpj) {
    // Tentar determinar se é CPF (11 dígitos) ou CNPJ (14 dígitos)
    const cleanCpfCnpj = data.cpf_cnpj.replace(/\D/g, '')
    if (cleanCpfCnpj.length === 11) {
      cpf = data.cpf_cnpj
    } else if (cleanCpfCnpj.length === 14) {
      cnpj = data.cpf_cnpj
    } else {
      // Se não conseguir determinar, salvar em cpf_cnpj
      // e deixar cpf e cnpj como null
    }
  }

  const client = await prisma.client.create({
    data: {
      name: data.name,
      email: data.email ?? null,
      phone: data.phone ?? null,
      cpf: cpf,
      cnpj: cnpj,
      cpf_cnpj: data.cpf_cnpj ?? null,
      address: data.address ?? null,
      city: data.city ?? null,
      state: data.state ?? null,
      zip_code: data.zip_code ?? null,
      notes: data.notes ?? null,
      dateOfBirth: data.dateOfBirth
        ? new Date(data.dateOfBirth)
        : null,
      profession: data.profession ?? null,
      maritalStatus: data.maritalStatus ?? null,
    }
  })

  return client
}