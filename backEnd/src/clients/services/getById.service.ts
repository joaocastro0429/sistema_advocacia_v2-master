import { prisma } from "../../lib/prisma"

export const getClientById = async (id: string, userId: string) => {
  const client = await prisma.client.findFirst({
    where: {
      id,
      userId,
    },
  })

  if (!client) {
    return null
  }

  return {
    ...client,
    cpf_cnpj: client.cpf || client.cnpj || null,
  }
}
