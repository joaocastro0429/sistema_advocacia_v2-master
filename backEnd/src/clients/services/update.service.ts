import { prisma } from "../../lib/prisma"

export const updateClient = async (id: string, data: any) => {
  try {
    // Se cpf_cnpj foi enviado, tentar separar em cpf ou cnpj
    let cpf = data.cpf ?? undefined
    let cnpj = data.cnpj ?? undefined
    
    if (data.cpf_cnpj && !cpf && !cnpj) {
      const cleanCpfCnpj = data.cpf_cnpj.replace(/\D/g, '')
      if (cleanCpfCnpj.length === 11) {
        cpf = data.cpf_cnpj
      } else if (cleanCpfCnpj.length === 14) {
        cnpj = data.cpf_cnpj
      }
    }

    return await prisma.client.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email ?? undefined,
        phone: data.phone ?? undefined,
        cpf: cpf,
        cnpj: cnpj,
        cpf_cnpj: data.cpf_cnpj ?? undefined,
        address: data.address ?? undefined,
        city: data.city ?? undefined,
        state: data.state ?? undefined,
        zip_code: data.zip_code ?? undefined,
        notes: data.notes ?? undefined,
        profession: data.profession ?? undefined,
        maritalStatus: data.maritalStatus ?? undefined,
        dateOfBirth: data.dateOfBirth
          ? new Date(data.dateOfBirth)
          : undefined,
      },
    })
  } catch (error) {
    console.error(error)
    throw error
  }
}
