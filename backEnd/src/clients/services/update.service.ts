import { prisma } from "../../lib/prisma"

export const updateClient = async (id: string, userId: string, data: any) => {
  try {
    const existing = await prisma.client.findFirst({
      where: { id, userId },
      select: { id: true },
    })

    if (!existing) {
      throw new Error("Cliente nao encontrado")
    }

    let cpf = data.cpf ?? undefined
    let cnpj = data.cnpj ?? undefined

    if (data.cpf_cnpj && !cpf && !cnpj) {
      const cleanCpfCnpj = data.cpf_cnpj.replace(/\D/g, "")
      if (cleanCpfCnpj.length === 11) {
        cpf = data.cpf_cnpj
      } else if (cleanCpfCnpj.length === 14) {
        cnpj = data.cpf_cnpj
      }
    }

    const updated = await prisma.client.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email ?? undefined,
        phone: data.phone ?? undefined,
        cpf,
        cnpj,
        address: data.address ?? undefined,
        city: data.city ?? undefined,
        state: data.state ?? undefined,
      },
    })

    return {
      ...updated,
      cpf_cnpj: updated.cpf || updated.cnpj || null,
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
