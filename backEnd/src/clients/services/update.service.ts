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

    const updatePayload: any = {
      name: data.name,
      email: data.email ?? undefined,
      phone: data.phone ?? undefined,
      cpf,
      cnpj,
      address: data.address ?? undefined,
      city: data.city ?? undefined,
      state: data.state ?? undefined,
      documentPath:
        data.documentPath !== undefined
          ? data.documentPath || null
          : data.document_id !== undefined
            ? data.document_id || null
            : undefined,
    }

    let updated: any
    try {
      updated = await prisma.client.update({
        where: { id },
        data: updatePayload,
      })
    } catch (error: any) {
      const isMissingDocumentPath = error?.code === "P2022"
      if (!isMissingDocumentPath) throw error

      const { documentPath, ...legacyPayload } = updatePayload
      updated = await prisma.client.update({
        where: { id },
        data: legacyPayload,
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
      ...updated,
      cpf_cnpj: updated.cpf || updated.cnpj || null,
      document_id: updated.documentPath ?? null,
    }
  } catch (error) {
    console.error(error)
    throw error
  }
}
