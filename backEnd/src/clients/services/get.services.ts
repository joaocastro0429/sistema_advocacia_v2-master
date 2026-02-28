import { prisma } from "../../lib/prisma"

export const getClients = async (userId: string) => {
  try {
    const clients = await prisma.client.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return clients.map((client) => ({
      ...client,
      cpf_cnpj: client.cpf || client.cnpj || null,
    }))
  } catch (error) {
    throw new Error("Erro ao buscar usuarios")
  }
}
